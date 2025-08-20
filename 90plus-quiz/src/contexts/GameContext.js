import React, { createContext, useContext, useState } from 'react';

// Create the context
const GameContext = createContext(null);

// Create the game provider
export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState({
    currentGame: null,
    score: 0,
    attempts: 0,
    history: [],
    completed: false
  });

  const startGame = (gameType) => {
    setGameState(prev => ({
      ...prev,
      currentGame: gameType,
      score: 0,
      attempts: 0,
      completed: false
    }));
  };

  const updateScore = (points) => {
    setGameState(prev => ({
      ...prev,
      score: prev.score + points
    }));
  };

  const incrementAttempts = () => {
    setGameState(prev => ({
      ...prev,
      attempts: prev.attempts + 1
    }));
  };

  const completeGame = () => {
    setGameState(prev => ({
      ...prev,
      completed: true,
      history: [...prev.history, {
        game: prev.currentGame,
        score: prev.score,
        attempts: prev.attempts,
        date: new Date().toISOString()
      }]
    }));
  };

  const resetGame = () => {
    setGameState(prev => ({
      ...prev,
      currentGame: null,
      score: 0,
      attempts: 0,
      completed: false
    }));
  };

  const value = {
    gameState,
    startGame,
    updateScore,
    incrementAttempts,
    completeGame,
    resetGame
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};

// Custom hook to use the game context
export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
