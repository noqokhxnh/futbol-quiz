import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/common/Header';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { useGame } from '../contexts/GameContext';
import { useDailyQuiz } from '../hook/useDailyQuiz';

const GamePlay = () => {
  const { gameType } = useParams();
  const { gameState } = useGame();
  const { loading, error, question, players } = useDailyQuiz(gameType);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Header />
        <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
          <LoadingSpinner size="lg" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-red-500">Error: {error}</p>
        </div>
      </div>
    );
  }

  const renderGame = () => {
    switch (gameType) {
      case 'guessPlayer':
        return <div>Guess Player Game Component</div>; // You'll implement this later
      case 'pyramid':
        return <div>Pyramid Game Component</div>; // You'll implement this later
      case 'footballLink':
        return <div>Football Link Game Component</div>; // You'll implement this later
      case 'legacy':
        return <div>Legacy Game Component</div>; // You'll implement this later
      default:
        return <div>Invalid game type</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {renderGame()}
      </main>
    </div>
  );
};

export default GamePlay;
