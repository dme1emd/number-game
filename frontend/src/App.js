import './App.css';
import { Game } from './components/Game';
import { BrowserRouter , Route , Routes} from 'react-router-dom'
import { MainMenu } from './components/MainMenu';
import { Rules } from './components/Rules';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Game/>} path='/game/'/>
          <Route element={<MainMenu/>} path='/' exact/>
          <Route element={<Rules/>} path='/rules/'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
