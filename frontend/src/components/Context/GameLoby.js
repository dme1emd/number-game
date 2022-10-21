import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GameContext from './GameContext'
import OnlineGameContext from './OnlineGameContext'

export const GameLoby = ({game}) => {
    const navigate = useNavigate('')
    const [password , setPassword] = useState('')
    const [message , setMessage] = useState('')
    const {setLocalPlayer} = useContext(GameContext)
    const {domain} = useContext(OnlineGameContext)
    const deleteGame = async ()=>{
      const response = await fetch(`${domain}game-delete/${game.id}/`,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        },
      })
    }
  return (
    <div className='game-lobby'>
        <div>{game.name}</div>
        {!game.is_private  ? 
        <button onClick={async()=>{
            localStorage.setItem('game',game.id)
            setLocalPlayer(2)
            await deleteGame()
            navigate(`/game/${game.id}`)
            }}>join
        </button>
        :
        <div>
          <input type='text' onChange={(e)=>{setPassword(e.target.value);setMessage('')}} value={password}/>
          <button onClick={
            async ()=>{
              if(game.password == password){
                setLocalPlayer(2)
                await deleteGame()
                localStorage.setItem('game',game.id)
                navigate(`/game/${game.id}/`)
            }
              else
              setMessage('invalid password')
            }
          }>join</button>
        </div>
        }
        {message}
    </div>
  )
}
