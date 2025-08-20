const FOOTBALL_API_KEY = process.env.FOOTBALL_data_dot_org_API_KEY; 
const BASE_URL = 'https://api.football-data.org/v4';

const headers = {
  'X-Auth-Token': FOOTBALL_API_KEY,
  'Content-Type': 'application/json'
};

export const footballDataApi = {
  // Get team information
  getTeam: async (teamId) => {
    try {
      const response = await fetch(`${BASE_URL}/teams/${teamId}`, { headers });
      if (!response.ok) throw new Error('Failed to fetch team data');
      return await response.json();
    } catch (error) {
      console.error('Error fetching team:', error);
      throw error;
    }
  },

  // Get player information
  getPlayer: async (playerId) => {
    try {
      const response = await fetch(`${BASE_URL}/persons/${playerId}`, { headers });
      if (!response.ok) throw new Error('Failed to fetch player data');
      return await response.json();
    } catch (error) {
      console.error('Error fetching player:', error);
      throw error;
    }
  },

  // Search for players
  searchPlayers: async (name) => {
    try {
      const response = await fetch(`${BASE_URL}/persons/search/${name}`, { headers });
      if (!response.ok) throw new Error('Failed to search players');
      return await response.json();
    } catch (error) {
      console.error('Error searching players:', error);
      throw error;
    }
  },

  // Get competitions
  getCompetitions: async () => {
    try {
      const response = await fetch(`${BASE_URL}/competitions`, { headers });
      if (!response.ok) throw new Error('Failed to fetch competitions');
      return await response.json();
    } catch (error) {
      console.error('Error fetching competitions:', error);
      throw error;
    }
  },

  // Get teams in a competition
  getCompetitionTeams: async (competitionId) => {
    try {
      const response = await fetch(`${BASE_URL}/competitions/${competitionId}/teams`, { headers });
      if (!response.ok) throw new Error('Failed to fetch competition teams');
      return await response.json();
    } catch (error) {
      console.error('Error fetching competition teams:', error);
      throw error;
    }
  },

  // Get team squad
  getTeamSquad: async (teamId) => {
    try {
      const response = await fetch(`${BASE_URL}/teams/${teamId}/squad`, { headers });
      if (!response.ok) throw new Error('Failed to fetch team squad');
      return await response.json();
    } catch (error) {
      console.error('Error fetching team squad:', error);
      throw error;
    }
  },

  // Get matches
  getMatches: async (dateFrom, dateTo, competitionId = null) => {
    try {
      let url = `${BASE_URL}/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`;
      if (competitionId) url += `&competitions=${competitionId}`;
      
      const response = await fetch(url, { headers });
      if (!response.ok) throw new Error('Failed to fetch matches');
      return await response.json();
    } catch (error) {
      console.error('Error fetching matches:', error);
      throw error;
    }
  }
};
