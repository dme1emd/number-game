import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GameContext from './Context/GameContext'
import OnlineGameContext from './Context/OnlineGameContext'
import { GameBegining } from './GameBegining'
import { MagicInput } from './MagicInput'
import { MiddleGame } from './MiddleGame'
export const OnlineGame = () => {
  const {endOfGame , numberOne , numberTwo , setNumberTwo, setTurn ,playerTwo ,localPlayer, playerOne,setPlayerTwo, playerTwoGuess ,setPlayerTwoGuess } = useContext(GameContext)
  const {game_id} = useParams()
  const {socket , setSocket} = useContext(OnlineGameContext)
  if(endOfGame) socket.disconnect()
  useEffect(()=>{
    setSocket(new WebSocket(`ws://127.0.0.1:8000/game/${game_id}/`))
  },[])
  if(socket)
  socket.onmessage = (e)=>{
      const data = JSON.parse(e.data)
      if(data.type == 'make-guess'){
          console.log('its ok here')
          data.player==1 ? setTurn(2) : setTurn(1)
          localPlayer !=data.player ?setPlayerTwoGuess([...playerTwoGuess , data.guess]) :console.log()
          return
      }
      if(data.type == 'other-player' && localPlayer != data.player){
        setPlayerTwo(data.player_username)
        setNumberTwo(data.number)
    }
    console.log(numberOne ,numberTwo)
  }
  return (
    <div>
      {!numberOne || !numberTwo ?<GameBegining online={true}/>:''}
      {
        !endOfGame ? <MiddleGame online={true}/>
        :
        'fini'
      }
    </div>
  )
}
