import './App.css';
import { Game } from './components/Game';
import { BrowserRouter , Route , Routes} from 'react-router-dom'
import { MainMenu } from './components/MainMenu';
import { Rules } from './components/Rules';
import { Lobby } from './components/Lobby';
import {OnlineGame} from './components/OnlineGame';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Game/>} path='/game/'/>
          <Route element={<OnlineGame/>} path='/game/:game_id/'/>
          <Route element={<MainMenu/>} path='/' exact/>
          <Route element={<Rules/>} path='/rules/'/>
          <Route element={<Lobby/>} path='/lobby/'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
