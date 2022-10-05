import React, { useContext, useState } from 'react'
import GameContext from './Context/GameContext'
import { MagicInput } from './MagicInput'
export const GameBegining = () => {
    const [pseudoOne , setPseudoOne] = useState('')
    const [pseudoTwo , setPseudoTwo] = useState('')
    const [displayInputOne , setDisplatInputOne] = useState(true)
    const [displayInpuTwo , setDisplatInpuTwo] = useState(false)
    const {setPlayerOne , setPlayerTwo , setNumberOne , setNumberTwo ,numTwoOk,numOneOk}=useContext(GameContext)
  return (
    <div>
       {
        !numOneOk ? 
       <div>
            <input type='text' onChange={(e)=>{setPseudoOne(e.target.value)}} placeholder='pseudo for the game' value={pseudoOne}/>
            <MagicInput key='ask-value-one' player={1}/>
        </div>
        :
        !numTwoOk ?
        <div>
            <input type='text' onChange={(e)=>{setPseudoTwo(e.target.value)}} placeholder='pseudo for the game' value={pseudoTwo}/>
            <MagicInput key='ask-value-two' player={2}/>
        </div>
        :
        ''
        }
    </div>
  )
}
