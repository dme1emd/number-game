import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GameContext from './Context/GameContext'
import { GameLoby } from './Context/GameLoby'
import OnlineGameContext from './Context/OnlineGameContext'

export const Lobby = () => {
    const {domain , socket} = useContext(OnlineGameContext)
    const {refresh}=useContext(GameContext)
    const [lobbyGames , setLobbyGames] = useState([])
    const [showForm , setShowForm] = useState(false)
    const [message, setMessage] =useState('')
    const [roomName , setRoomName] = useState('')
    const [password , setPassword] = useState('')
    const [privateRoom , setPrivateRoom] = useState(false)
    const [nav , setNav] = useState(false)
    const navigate = useNavigate()
    const getLobbyGames = async (params)=>{
        const response = await fetch(`${domain}lobby/${params? `?search=${params}`:''}`)
        const data = await response.json()
        console.log(response)
        setLobbyGames(data)
    }
    const addGame=()=>{
      setShowForm(true)
    }
    const confirmAdd =async(e)=>{
      e.preventDefault()
      const response = await fetch(`${domain}lobby/`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
          "name":roomName,
          "is_private": privateRoom,
          "password": password
        })
      })
      if (response.status!==400){
        await getLobbyGames()
        setNav(true)
      }
      else{
        setMessage('the room\'s name has to be unique')
      }
    }
    const handlePassword = (e)=>{
      setPassword(e.target.value)
    }
    const deleteRoom = async()=>{
      const id= localStorage.getItem('game_created')
      if(id)
      {
        localStorage.removeItem('game_created')
        await fetch(`${domain}game-delete/${id}/`,
          {
            method : 'DELETE'
          }
        )}
    }
    useEffect(()=>{
      getLobbyGames();
      refresh()
      deleteRoom()
      socket ? socket.close() :console.log()
    },[])
    useEffect(()=>{
      if(lobbyGames && nav) {
        localStorage.setItem('game',lobbyGames.filter((elem)=>elem.name==roomName)[0].id)
        localStorage.setItem('game_created',lobbyGames.filter((elem)=>elem.name==roomName)[0].id)
        navigate(`/game/${lobbyGames.filter((elem)=>elem.name==roomName)[0].id}`)
      }
    },[lobbyGames])
  return (
    <div className='lobby'>
      {showForm ?'':<input type="search" placeholder='search for games here' onChange={(e)=>{getLobbyGames(e.target.value)}}/>}
        {
        showForm ?
          <form>
            <button onClick={()=>{
              setShowForm(false)
              setRoomName('')
              }}>x</button>
            <input type='text' value={roomName} onChange={(e)=>{setRoomName(e.target.value);setMessage('')}} placeholder="room's name"/>
            <div className='checkbox'>
              <input type='checkbox' onChange={(e)=>setPrivateRoom(e.target.checked)}/>
              <label>is private</label>
            </div>
            {privateRoom ? <input type='password' onChange={handlePassword} value={password}/>:''}
            <button onClick={confirmAdd}>add a room</button>
            <div className='error-msg'>
            {message}
            </div>
          </form>
          : 
          <button onClick={addGame}>
            add
          </button>
        }
        <div className='game-list'>
          {lobbyGames.map((game)=><GameLoby game={game} key={game.id}/>)}
        </div>
    </div>
  )
}
