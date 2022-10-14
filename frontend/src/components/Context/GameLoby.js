import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import GameContext from './GameContext'

export const GameLoby = ({game}) => {
    const navigate = useNavigate('')
    const {setPlayer} = useContext(GameContext)
  return (
    <div>
        <div>{game.name}</div>
        <button onClick={()=>{
            navigate(`/game/${game.id}`)
            setPlayer(2)
            }}>join</button>
    </div>
  )
}
