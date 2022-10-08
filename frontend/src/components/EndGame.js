import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import GameContext from './Context/GameContext'

export const EndGame = () => {
    const {setPlayerOne , setPlayerTwo , setNumberOne ,setNumberTwo,setNumOneOk,setNumTwoOk,setPlayerOneGuess,setPlayerTwoGuess,setTurn,setOfEndGame} = useContext(GameContext)
    const {turn , playerOne , playerTwo} = useContext(GameContext)
    const navigate =useNavigate()
    const restartGame = ()=>{
        navigate('/')
        setPlayerOne('')
        setPlayerTwo('')
        setNumberOne('')
        setNumberTwo('')
        setNumOneOk(false)
        setNumTwoOk(false)
        setPlayerOneGuess([])
        setPlayerTwoGuess([])
        setTurn([])
        setOfEndGame(false)
        navigate('/game/')
    }
    const mainMenu = ()=>{
        navigate('/')
        setPlayerOne('')
        setPlayerTwo('')
        setNumberOne('')
        setNumberTwo('')
        setNumOneOk(false)
        setNumTwoOk(false)
        setPlayerOneGuess([])
        setPlayerTwoGuess([])
        setTurn([])
        setOfEndGame(false)
    }
  return (
    <div className='end-game'>
        <div className='menu'>
            <div className='winner'>
                {`${turn === 2 ? playerOne : playerTwo} wins the game`}
            </div>
            <button onClick={restartGame}>replay</button>
            <button onClick={mainMenu}>main menu</button>
        </div>
    </div>
  )
}