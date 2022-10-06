import React, { useContext } from 'react'
import GameContext from './Context/GameContext'
import { Guess } from './Guess'
import { MagicInput } from './MagicInput'
export const MiddleGame = () => {
    const {turn , setTurn , numberOne ,numberTwo,playerOneGuess , playerTwoGuess} = useContext(GameContext)
    const compare =(string1 , string2)=>{
        var numbers = 0
        var positions = 0
        for(var i = 0 ; i<string1.length ; i++){
            for(var j = 0 ; j<string2.length ; j++)
                if(string1[i] == string2[j]){
                    numbers++
                    if(i == j){
                        positions ++
                    }
                }
        };
        return [numbers , positions]
    }
    console.log(compare('1234' , '1253')[0])
  return (
    (numberOne && numberTwo) ? 
    <div>
        {
            turn == 1? 
            <MagicInput className='guess-input player-one' player={turn} guess={true} key='player-one-guess'/>
            :
            <MagicInput className = 'guess-input player-two' player={turn} guess={true} key='player-two-guess'/>
        }
        <div className='guesses-container'>
            <ul className='player-guess player-one'>
                {playerOneGuess.length ? playerOneGuess.map(
                    (guess , index)=>{
                        return(
                            <Guess guess={guess} result={compare(numberTwo , guess)} key={`guess-${index}-player-one`}/>
                        )
                    }
                ):''}
            </ul>
            <div className='separator'></div>
            <ul className='player-guess player-two'>
                {playerTwoGuess.length> 0? playerTwoGuess.map(
                    (guess , index)=>{
                        return(
                            <Guess guess={guess} result={compare(numberOne , guess)} key={`guess-${index}-player-two`}/>
                        )
                    }
                ):''
                }
            </ul>
        </div>
    </div>:
    ''
  )
}
