import React, { useContext } from 'react'
import GameContext from './Context/GameContext'

export const EndGame = () => {
    const {turn , playerOne , playerTwo} = useContext(GameContext)
  return (
    <div className='end-game'>
        <div className='menu'>
            <div className='winner'>
                {`${turn === 2 ? playerOne : playerTwo} wins the game`}
            </div>
            <button>replay</button>
            <button>main menu</button>
        </div>
    </div>
  )
}