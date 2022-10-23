import React, { useContext, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import GameContext from './Context/GameContext'
export const MainMenu = () => {
    const {refresh}=useContext(GameContext)
    const navigate = useNavigate()
    const startGame = ()=>{
        navigate('/game/')
    }
    const rules = ()=>{
        navigate('/rules/')
    }
    const onlineGame = ()=>{
      navigate('/lobby/')
  }
  useEffect(()=>{refresh()},[])
  return (
    <div className='main-menu'>
        <button onClick={startGame}>start a game</button>
        <button onClick={onlineGame}>play online</button>
        <button onClick={rules}>rules</button>
    </div>
  )
}
