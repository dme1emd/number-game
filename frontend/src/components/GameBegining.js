import React, { useContext, useState } from 'react'
import GameContext from './Context/GameContext'
import { MagicInput } from './MagicInput'
export const GameBegining = ({online}) => {
    const [pseudoOne , setPseudoOne] = useState('')
    const [pseudoTwo , setPseudoTwo] = useState('')
    const [displayInputOne , setDisplatInputOne] = useState(true)
    const [displayInpuTwo , setDisplatInpuTwo] = useState(false)
    const {show,setShow,player,setPlayerOne , setPlayerTwo , setNumberOne , setNumberTwo ,numTwoOk,numOneOk , playerOne , playerTwo}=useContext(GameContext)
    console.log(show)
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
        show ? 
        <div className='game-begin-container'>
          <input type='text' onChange={(e)=>{setPlayerOne(e.target.value)}} placeholder='pseudo for the game' value={playerOne} className='pseudo-input'/>
          <MagicInput key='ask-value-two' player={player} online={true}/>
        </div>:''
        }
    </div>
  )
}
