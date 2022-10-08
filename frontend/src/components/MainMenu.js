import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
export const MainMenu = () => {
    const navigate = useNavigate()
    const startGame = ()=>{
        navigate('/game/')
    }
    const rules = ()=>{
        navigate('/rules/')
    }
  return (
    <div className='main-menu'>
        <button onClick={startGame}>start a game</button>
        <button onClick={rules}>rules</button>
    </div>
  )
}
