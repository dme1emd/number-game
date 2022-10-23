import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import GameContext from './Context/GameContext'

export const EndGame = ({online}) => {
    const {messageQuit,turn,localPlayer,playerOne , playerTwo} = useContext(GameContext)
    const navigate =useNavigate()
    const restartGame = ()=>{
        navigate('/')
        navigate('/game/')
    }
    const mainMenu = ()=>{
        if(online)
        localStorage.removeItem('game')
        navigate('/')
    }
  return (
    <div className='end-game'>
        <div className='menu'>
            <div className='winner'>
                {`${online ? turn===localPlayer? playerOne.length? playerOne :'you' : playerTwo.length ? playerTwo :'player two':turn === 2 ? playerOne : playerTwo} win${online && turn ==localPlayer & !playerOne.length?'':'s'} the game`}
            </div>
            {messageQuit}
            {online ?'':<button onClick={restartGame}>replay</button>}
            <button onClick={mainMenu}>main menu</button>
        </div>
    </div>
  )
}