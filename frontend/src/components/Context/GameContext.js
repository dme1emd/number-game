import { createContext ,useState } from "react";
const GameContext = createContext()
export default GameContext
export const GameProvider = ({children}) => {
    const [localPlayer , setLocalPlayer] =useState(1)
    const [numPlayer , setNumPlayer] =useState(0)
    const [playerOne , setPlayerOne] = useState('')
    const [playerTwo , setPlayerTwo] = useState('')
    const [numberOne , setNumberOne] = useState('')
    const [numberTwo , setNumberTwo] = useState('')
    const [numOneOk , setNumOneOk] = useState(false)
    const [numTwoOk , setNumTwoOk] = useState(false)
    const [playerOneGuess ,setPlayerOneGuess] = useState([])
    const [playerTwoGuess , setPlayerTwoGuess] = useState([])
    const [turn , setTurn] = useState(1)
    const [show , setShow] = useState(true)
    const [endOfGame , setEndOfGame] = useState(false)
    const [messageQuit , setMessageQuit] = useState(false)
    const refresh=()=>{
      setPlayerOne('')
      setPlayerTwo('')
      setNumberOne('')
      setNumberTwo('')
      setNumOneOk(false)
      setNumTwoOk(false)
      setPlayerOneGuess([])
      setPlayerTwoGuess([])
      setTurn(1)
      setEndOfGame(false)
      setLocalPlayer(1)
      setNumPlayer(0)
      setMessageQuit('')
  }
  return (
    <GameContext.Provider value={{
      messageQuit,
      setMessageQuit,
        playerOne ,
        setPlayerOne ,
        playerTwo ,
        setPlayerTwo,
        numberOne ,
        setNumberOne,
        numberTwo,
        setNumberTwo,
        setNumOneOk,
        setNumTwoOk,
        numOneOk,
        numTwoOk,
        playerOneGuess,
        playerTwoGuess,
        setPlayerOneGuess,
        setPlayerTwoGuess,
        turn,
        setTurn , 
        endOfGame , 
        setEndOfGame,
        localPlayer,
        setLocalPlayer,
        show,
        setShow,
        numPlayer,
        setNumPlayer,
        refresh
    }}>
        {children}
    </GameContext.Provider>
  )
}