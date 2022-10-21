import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GameContext from './GameContext'

export const GameLoby = ({game}) => {
    const navigate = useNavigate('')
    const [password , setPassword] = useState('')
    const [message , setMessage] = useState('')
    const {setLocalPlayer} = useContext(GameContext)
  return (
    <div className='game-lobby'>
        <div>{game.name}</div>
        {!game.is_private  ? 
        <button onClick={()=>{
            navigate(`/game/${game.id}`)
            setLocalPlayer(2)
            }}>join
        </button>
        :
        <div>
          <input type='text' onChange={(e)=>{setPassword(e.target.value);setMessage('')}} value={password}/>
          <button onClick={
            ()=>{
              game.password == password ? 
              navigate(`game/${game.id}/`)
              :
              setMessage('invalid password')
            }
          }>join</button>
        </div>
        }
        {message}
    </div>
  )
}
