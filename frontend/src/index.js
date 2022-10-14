import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GameProvider } from './components/Context/GameContext';
import { OnlineGameProvider } from './components/Context/OnlineGameContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <OnlineGameProvider>
    <GameProvider>
      <App />
    </GameProvider>
  </OnlineGameProvider>
);
