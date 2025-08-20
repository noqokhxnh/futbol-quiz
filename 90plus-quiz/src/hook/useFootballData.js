import { useState, useEffect } from 'react';
import { footballDataApi } from '../services/footballDataApi';

export const useFootballData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWithLoading = async (apiCall) => {
    setLoading(true);
    setError(null);
    try {
      const result = await apiCall();
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const searchPlayer = async (name) => {
    return fetchWithLoading(() => footballDataApi.searchPlayers(name));
  };

  const getPlayerDetails = async (playerId) => {
    return fetchWithLoading(() => footballDataApi.getPlayer(playerId));
  };

  const getTeamSquad = async (teamId) => {
    return fetchWithLoading(() => footballDataApi.getTeamSquad(teamId));
  };

  const getCompetitions = async () => {
    return fetchWithLoading(() => footballDataApi.getCompetitions());
  };

  const getTeamDetails = async (teamId) => {
    return fetchWithLoading(() => footballDataApi.getTeam(teamId));
  };

  const getMatches = async (dateFrom, dateTo, competitionId) => {
    return fetchWithLoading(() => 
      footballDataApi.getMatches(dateFrom, dateTo, competitionId)
    );
  };

  return {
    loading,
    error,
    searchPlayer,
    getPlayerDetails,
    getTeamSquad,
    getCompetitions,
    getTeamDetails,
    getMatches
  };
};
