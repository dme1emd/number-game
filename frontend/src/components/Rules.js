import React from 'react'

export const Rules = () => {
    const rules = [
        'each player choses a number composed of four digits' , 
        'a digit cannot appear twice in a number' , 
        'each player te to find out the number of his opponent by making guesses' , 
        'each guess is followed by a result representing to the similarity between guess and oponent num',
        'a result is written in this form : a-b',
        'a is the number of common digits between the guess and the oponent num',
        'b is the number of digits in the right place',
    ]
  return (
    <div className='rules-container'>
        <h1>game's rules</h1>
        <ul>
            {rules.map((rule)=><li>{rule}</li>)}
        </ul>
    </div>
  )
}
