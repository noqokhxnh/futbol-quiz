import { useState, useEffect } from 'react';
import { gameServices } from '../services/gameServices';
import { PlayerService } from '../services/playerServices';

export const useDailyQuiz = (gameType) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [question, setQuestion] = useState(null);
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    const fetchDailyQuiz = async () => {
      try {
        setLoading(true);
        const gameQuestion = await gameServices.getDailyGameQuestion(gameType);
        
        // Fetch required players based on game type
        let requiredPlayers;
        switch (gameType) {
          case 'guessPlayer':
            requiredPlayers = await PlayerService.getPlayerById(gameQuestion.playerId);
            setPlayers(requiredPlayers);
            break;
          case 'pyramid':
            requiredPlayers = await PlayerService.getPlayersByIds(gameQuestion.players);
            setPlayers(requiredPlayers);
            break;
          case 'footballLink':
            requiredPlayers = await PlayerService.getPlayersByIds([
              gameQuestion.player1,
              gameQuestion.player2
            ]);
            setPlayers(requiredPlayers);
            break;
          case 'legacy':
            requiredPlayers = await PlayerService.getPlayerById(gameQuestion.playerId);
            setPlayers(requiredPlayers);
            break;
          default:
            throw new Error('Invalid game type');
        }

        setQuestion(gameQuestion);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error in useDailyQuiz:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDailyQuiz();
  }, [gameType]);

  return {
    loading,
    error,
    question,
    players
  };
};
