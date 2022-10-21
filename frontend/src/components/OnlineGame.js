import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GameContext from './Context/GameContext'
import OnlineGameContext from './Context/OnlineGameContext'
import { GameBegining } from './GameBegining'
import { MagicInput } from './MagicInput'
import { MiddleGame } from './MiddleGame'
export const OnlineGame = () => {
  const {endOfGame, turn,playerTwo , playerOne,setEndOfGame, numberOne , numberTwo , setNumberTwo, setTurn,localPlayer,setPlayerTwo, playerTwoGuess ,setPlayerTwoGuess } = useContext(GameContext)
  const {game_id} = useParams()
  const {socket , setSocket} = useContext(OnlineGameContext)
  if(endOfGame) socket.close()
  useEffect(()=>{
    setSocket(new WebSocket(`ws://127.0.0.1:8000/game/${game_id}/`))
  },[])
  if(socket)
  socket.onmessage = (e)=>{
      const data = JSON.parse(e.data)
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
  }
  useEffect(()=>{
    console.log('your number ' , numberOne , '\n opponnent number ',numberTwo)
  },[numberOne , numberTwo])
  return (
    <div>
      {!numberOne || !numberTwo ?<GameBegining online={true}/>:''}
      {
        !endOfGame ? <MiddleGame online={true}/>
        :
        `${turn == localPlayer ? playerOne : playerTwo} wins the game`
      }
    </div>
  )
}
