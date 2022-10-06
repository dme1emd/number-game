import React from 'react'

export const Guess = ({guess , result}) => {
  return (
    <div className='guess-container'>
      <div className='guess'>{guess}</div>
      <div className='guess-result'>{`${result[0]} - ${result[1]}`}</div>
    </div>
  )
}
