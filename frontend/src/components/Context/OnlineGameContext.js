import { createContext ,useState } from "react";
import {io} from 'socket.io-client'
const OnlineGameContext = createContext()
export default OnlineGameContext
export const OnlineGameProvider = ({children}) => {
    const [socket,setSocket] = useState()
    const [domain , setDomain] = useState('http://127.0.0.1:8000/api/')
  return (
    <OnlineGameContext.Provider value={{
        socket,
        setSocket,
        domain,
    }}>
        {children}
    </OnlineGameContext.Provider>
  )
}