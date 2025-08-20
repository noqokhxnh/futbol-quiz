import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameProvider } from './contexts/GameContext';
import Home from './page/Home';
import GameSelection from './page/GameSelection';
import GamePlay from './page/GamePlay';
import './services/firebase'; // Import firebase initialization
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Router>
        <GameProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<GameSelection />} />
            <Route path="/play/:gameType" element={<GamePlay />} />
          </Routes>
        </GameProvider>
      </Router>
    </div>
  );
}

export default App;
