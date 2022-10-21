import React, { useContext, useState } from 'react'
import GameContext from './Context/GameContext'
import { MagicInput } from './MagicInput'
export const GameBegining = ({online}) => {
    const {numberOne,numberTwo,show,setShow,localPlayer,setPlayerOne , setPlayerTwo , setNumberOne , setNumberTwo ,numTwoOk,numOneOk , playerOne , playerTwo}=useContext(GameContext)
  return (
    <div>
       {!online ? 
        !numOneOk ? 
       <div className='game-begin-container'>
            <input type='text' onChange={(e)=>{setPlayerOne(e.target.value)} } placeholder='pseudo for the game' value={playerOne} className='pseudo-input'/>
            <MagicInput key='ask-value-one' player={1}/>
        </div>
        :
        !numTwoOk ?
        <div className='game-begin-container'>
            <input type='text' onChange={(e)=>{setPlayerTwo(e.target.value)}} placeholder='pseudo for the game' value={playerTwo} className='pseudo-input'/>
            <MagicInput key='ask-value-two' player={2}/>
        </div>
        :
        ''
        : 
        (numberOne && !numberTwo) ? 'wait for your opponent to chose':
        <div className='game-begin-container'>
          <input type='text' onChange={(e)=>{setPlayerOne(e.target.value)}} placeholder='pseudo for the game' value={playerOne} className='pseudo-input'/>
          <MagicInput key='ask-value-two' player={localPlayer} online={true}/>
        </div>
        }
    </div>
  )
}
