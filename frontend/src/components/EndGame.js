import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import GameContext from './Context/GameContext'

export const EndGame = ({online}) => {
    const {setLocalPlayer,setPlayerOne ,localPlayer , setPlayerTwo , setNumberOne ,setNumberTwo,setNumOneOk,setNumTwoOk,setPlayerOneGuess,setPlayerTwoGuess,setTurn,setEndOfGame} = useContext(GameContext)
    const {turn , playerOne , playerTwo} = useContext(GameContext)
    const navigate =useNavigate()
    const refresh=()=>{
        setPlayerOne('')
        setPlayerTwo('')
        setNumberOne('')
        setNumberTwo('')
        setNumOneOk(false)
        setNumTwoOk(false)
        setPlayerOneGuess([])
        setPlayerTwoGuess([])
        setTurn(1)
        setEndOfGame(false)
        setLocalPlayer(1)
    }
    const restartGame = ()=>{
        navigate('/')
        refresh()
        navigate('/game/')
    }
    const mainMenu = ()=>{
        navigate('/')
        refresh()
        if(online)
        localStorage.removeItem('game')
    }
  return (
    <div className='end-game'>
        <div className='menu'>
            <div className='winner'>
                {`${online ? turn===localPlayer? playerOne : playerTwo:turn === 2 ? playerOne : playerTwo} wins the game`}
            </div>
            {online ?'':<button onClick={restartGame}>replay</button>}
            <button onClick={mainMenu}>main menu</button>
        </div>
    </div>
  )
}