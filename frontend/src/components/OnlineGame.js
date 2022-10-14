import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GameContext from './Context/GameContext'
import OnlineGameContext from './Context/OnlineGameContext'
import { GameBegining } from './GameBegining'
import { MagicInput } from './MagicInput'
import { MiddleGame } from './MiddleGame'
export const OnlineGame = () => {
  const {endOfGame} = useContext(GameContext)
  const {game_id} = useParams()
  const {socket , setSocket} = useContext(OnlineGameContext)
  if(endOfGame) socket.disconnect()
  useEffect(()=>{
    setSocket(new WebSocket(`ws://127.0.0.1:8000/game/${game_id}/`))
  },[])
  return (
    <div>
      <GameBegining online={true}/>
      {
        !endOfGame ? <MiddleGame online={true}/>
        :
        'fini'
      }
    </div>
  )
}
