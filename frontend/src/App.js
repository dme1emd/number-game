import './App.css';
import { Game } from './components/Game';
import { GameProvider } from './components/Context/GameContext';
import { BrowserRouter , Route , Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Game/>
    </div>
  );
}

export default App;
