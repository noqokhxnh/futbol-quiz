import { useState, useEffect } from 'react';
import { PlayerService } from '../services/playerService';

export const useFirestore = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const executeFirestoreOperation = async (operation) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await operation();
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    executeFirestoreOperation
  };
};

export const usePlayers = () => {
  const [players, setPlayers] = useState([]);
  const { loading, error, executeFirestoreOperation } = useFirestore();

  const loadPlayers = async () => {
    const result = await executeFirestoreOperation(() => 
      PlayerService.getAllPlayers()
    );
    setPlayers(result);
  };

  const getPlayer = (playerId) => {
    return executeFirestoreOperation(() => 
      PlayerService.getPlayerById(playerId)
    );
  };

  const addPlayer = (playerData) => {
    return executeFirestoreOperation(() => 
      PlayerService.addPlayer(playerData)
    );
  };

  useEffect(() => {
    loadPlayers();
  }, []);

  return {
    players,
    loading,
    error,
    loadPlayers,
    getPlayer,
    addPlayer
  };
};