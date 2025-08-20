import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import Card from '../components/ui/Card';
import { useGame } from '../contexts/GameContext';

const GameSelection = () => {
  const navigate = useNavigate();
  const { startGame } = useGame();

  const games = [
    {
      id: 'guessPlayer',
      name: 'Guess the Player',
      description: 'Answer yes/no questions to guess the mystery footballer',
      difficulty: 'Medium'
    },
    {
      id: 'pyramid',
      name: 'Pyramid',
      description: 'Order players by their achievements',
      difficulty: 'Hard'
    },
    {
      id: 'footballLink',
      name: 'Football Link',
      description: 'Find the connection between two players',
      difficulty: 'Medium'
    },
    {
      id: 'legacy',
      name: 'Legacy',
      description: 'Guess legendary players from their career timeline',
      difficulty: 'Expert'
    }
  ];

  const handleGameSelect = (gameId) => {
    startGame(gameId);
    navigate(`/play/${gameId}`);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
          Select Game Mode
        </h1>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {games.map((game) => (
            <Card 
              key={game.id}
              interactive
              className="transform transition-all hover:-translate-y-1"
              onClick={() => handleGameSelect(game.id)}
            >
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-emerald-500">{game.name}</h2>
                <p className="text-gray-400 mb-4">{game.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Difficulty:</span>
                  <span className="text-sm font-medium text-emerald-500">{game.difficulty}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default GameSelection;
