import React, { Children, useContext, useState } from 'react'
import GameContext from './Context/GameContext'

export const MagicInput = ({guess , player}) => {
    const [number , setNumber] = useState('')
    const [message , setMessage] = useState(false)
    const {numberOne , numberTwo, setOfEndGame,setNumberOne ,setNumberTwo , setNumOneOk,setNumTwoOk,setPlayerOneGuess , setPlayerTwoGuess ,playerOneGuess,playerTwoGuess,turn,setTurn , playerOne ,playerTwo}= useContext(GameContext)

    const handleChange = (e)=>{
        if(e.target.value[e.target.value.length-1]>'9' || e.target.value[e.target.value.length-1]<'0'){
            setMessage('only digits accepted') 
        }
        if(number.includes(e.target.value[e.target.value.length-1])){
            setMessage('a digit can\'t appear twice in your number') 
        }
        if(e.target.value.length>4){
            setMessage('your number must have exactly 4 digits') 
        }
        if(!(e.target.value[e.target.value.length-1]>'9' || e.target.value[e.target.value.length-1]<'0' || e.target.value.length>4 || number.includes(e.target.value[e.target.value.length - 1]))|| e.nativeEvent.inputType == "deleteContentBackward"){
            setNumber(e.target.value)
            setMessage('')
        }
    }
    const confirm = (e)=>{
        e.preventDefault()
        console.log(number.length)
        if (number.length == 4){
            if(player == 1){
                setNumOneOk(true)
                setNumberOne(number)
            }
            else{
                setNumTwoOk(true)
                setNumberTwo(number) 
            }
        }
    }
    const makeGuess = (e)=>{
        e.preventDefault()
        if(number.length == 4){
            console.log()
            if(player == 1){
                if(numberTwo === number){
                    setOfEndGame(true)
                }
                setPlayerOneGuess([...playerOneGuess , number])
                setTurn(2)
            }else{
                if(numberOne === number){
                    setOfEndGame(true)
                }
                setPlayerTwoGuess([...playerTwoGuess ,number])
                setTurn(1)
            }
        }
    }
  return (
    <div>
        <form>
            <input type='text' className='input-guess' onChange={handleChange} value={number} placeholder={`${guess ? `${turn == 1 ? playerOne : playerTwo}` : 'chose a number'}`}/>
            <button onClick={guess ? makeGuess:confirm}>
                confirm !
            </button>
            {message ? <div className='message-error'>{message}</div> : ''}
        </form>
    </div>
  )
}

