import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GameLoby } from './Context/GameLoby'
import OnlineGameContext from './Context/OnlineGameContext'

export const Lobby = () => {
    const {domain} = useContext(OnlineGameContext)
    const [lobbyGames , setLobbyGames] = useState([])
    const [showForm , setShowForm] = useState(false)
    const [roomName , setRoomName] = useState('')
    const [password , setPassword] = useState('')
    const [privateRoom , setPrivateRoom] = useState(false)
    const navigate = useNavigate()
    const getLobbyGames = async ()=>{
        const response = await fetch(`${domain}lobby/`)
        const data = await response.json()
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
      getLobbyGames()
    }
    const handlePassword = (e)=>{
      setPassword(e.target.value)
    }
    useEffect(()=>{getLobbyGames()},[])
    useEffect(()=>{
      navigate(`/game/${lobbyGames.filter((elem)=>elem.name==roomName)[0].id}`)
    },[])
  return (
    <div className='lobby'>
        {
        showForm ?
          <form>
            <button onClick={()=>{
              setShowForm(false)
              setRoomName('')
              }}>x</button>
            <input type='text' value={roomName} onChange={(e)=>setRoomName(e.target.value)} placeholder="room's name"/>
            <div className='checkbox'>
              <input type='checkbox' onChange={(e)=>setPrivateRoom(e.target.checked)}/>
              <label>is private</label>
            </div>
            {privateRoom ? <input type='password' onChange={handlePassword} value={password}/>:''}
            <button onClick={confirmAdd}>add a room</button>
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
