import React, { useContext, useEffect, useState } from 'react'
import { GameLoby } from './Context/GameLoby'
import OnlineGameContext from './Context/OnlineGameContext'

export const Lobby = () => {
    const {domain} = useContext(OnlineGameContext)
    const [lobbyGames , setLobbyGames] = useState([])
    const getLobbyGames = async ()=>{
        const response = await fetch(`${domain}lobby/`)
        const data = await response.json()
        setLobbyGames(data)
    }
    useEffect(()=>{getLobbyGames()},[])
  return (
    <div>
        {lobbyGames.map((game)=><GameLoby game={game} key={game.id}/>)}
    </div>
  )
}
