import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import GameContext from './GameContext'

export const GameLoby = ({game}) => {
    const navigate = useNavigate('')
    const {setLocalPlayer} = useContext(GameContext)
  return (
    <div>
        <div>{game.name}</div>
        <button onClick={()=>{
            navigate(`/game/${game.id}`)
            setLocalPlayer(2)
            }}>join</button>
    </div>
  )
}
