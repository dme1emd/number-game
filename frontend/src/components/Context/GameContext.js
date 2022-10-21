import { createContext ,useState } from "react";
const GameContext = createContext()
export default GameContext
export const GameProvider = ({children}) => {
    const [localPlayer , setLocalPlayer] =useState(1)
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
  return (
    <GameContext.Provider value={{
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
        setShow
    }}>
        {children}
    </GameContext.Provider>
  )
}