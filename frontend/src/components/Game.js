import React, { useContext } from 'react'
import GameContext from './Context/GameContext'
import { EndGame } from './EndGame'
import { GameBegining } from './GameBegining'
import { MiddleGame } from './MiddleGame'
export const Game = () => {
    const {endGame} = useContext(GameContext)
  return (
    <div>
        <GameBegining/>
        {!endGame ? <MiddleGame/> : <EndGame/>}
    </div>
  )
}
