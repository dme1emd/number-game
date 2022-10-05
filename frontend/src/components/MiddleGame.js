import React, { useContext } from 'react'
import GameContext from './Context/GameContext'
import { MagicInput } from './MagicInput'

export const MiddleGame = () => {
    const {turn , setTurn , numberOne ,numberTwo,playerOneGuess , playerTwoGuess} = useContext(GameContext)
    const compare =(string1 , string2)=>{
        var numbers = 0
        var positions = 0
        string1.array.forEach((element,index)=> {
            string2.forEach((element2 , index2)=>{
                if(element == element2){
                    numbers++
                    if(index == index2){
                        positions ++
                    }
                }
            })
        });
        return [numbers , positions]
    }
  return (
    (numberOne && numberTwo) ? 
    <div>
        {
            turn == 1? 
            <MagicInput className='guess-input player-one' player={turn} guess={true}/>
            :
            <MagicInput className = 'guess-input player-two' player={turn} guess={true}/>
        }
        <ul className='player-guess player-one'>
            {playerOneGuess.length ? playerOneGuess.map(
                (guess)=>{
                    <div>
                        {compare(numberTwo , guess)[0] - compare(numberTwo , guess)[1]}
                    </div>
                }
            ):''}
        </ul>
        <ul className='player-guess player-two'>
            {playerTwoGuess.length ? playerTwoGuess.map(
                (guess)=>{
                    <div>
                        {compare(numberOne , guess)[0] - compare(numberOne , guess)[1]}
                    </div>
                }
            ):''
            }
        </ul>
    </div>:
    ''
  )
}
