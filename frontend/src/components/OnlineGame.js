import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GameContext from './Context/GameContext'
import OnlineGameContext from './Context/OnlineGameContext'
import { EndGame } from './EndGame'
import { GameBegining } from './GameBegining'
import { MiddleGame } from './MiddleGame'
export const OnlineGame = () => {
  const {setMessageQuit,endOfGame, setNumPlayer,numPlayer ,setEndOfGame, numberOne , numberTwo , setNumberTwo, setTurn,localPlayer,setPlayerTwo, playerTwoGuess ,setPlayerTwoGuess } = useContext(GameContext)
  const {game_id} = useParams()
  const {socket , setSocket} = useContext(OnlineGameContext)
  if(endOfGame) socket.close()
  useEffect(()=>{
    if(localStorage.getItem('game') == game_id)
    setSocket(new WebSocket(`ws://127.0.0.1:8000/game/${game_id}/`))    
  },[])
  if(socket)
  socket.onmessage = (e)=>{
      const data = JSON.parse(e.data)
      console.log(data)
      if(data.type == 'room_join')
      setNumPlayer(numPlayer+1)
      if(data.type == 'make-guess'){
          if(data.guess == numberOne){
            setEndOfGame(true)
            return
          }
          data.player==1 ? setTurn(2) : setTurn(1)
          localPlayer !=data.player ?setPlayerTwoGuess([...playerTwoGuess , data.guess]) :console.log()
          return
      }
      if(data.type == 'other-player' && localPlayer != data.player){
        setPlayerTwo(data.player_username)
        setNumberTwo(data.number)
      }
      if(data.type == 'disconnect')
      {
        setMessageQuit('your opponent left the game')
        setTurn(localPlayer)
        setEndOfGame(true)
      }
  }
  useEffect(()=>{
    console.log('your number ' , numberOne , '\n opponnent number ',numberTwo)
  },[numberOne , numberTwo])
  return (
    localStorage.getItem('game') == game_id?
    <div>
      {!numberOne || !numberTwo ?<GameBegining online={true}/>:''}
      {
        !endOfGame ? <MiddleGame online={true}/>
        :
        <EndGame online={true}/>
      }
    </div>
    :
    'this game is not available'
  )
}
