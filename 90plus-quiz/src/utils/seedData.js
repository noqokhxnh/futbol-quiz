import { PlayerService } from '../services/playerService';

const initialPlayers = [
  {
    id: "messi",
    name: "Lionel Messi",
    clubs: ["Barcelona", "PSG", "Inter Miami"],
    teammates: ["Iniesta", "Xavi", "Neymar", "Suarez", "Jordi Alba"],
    stats: {
      goals: 800,
      assists: 350,
      championsLeague: 4,
      ballonDor: 8,
      laLiga: 10,
      copaAmerica: 1,
      worldCup: 1
    },
    attributes: {
      position: "RW/CF",
      nationality: "Argentina",
      age: 36,
      height: "170cm",
      foot: "Left",
      market_value: "50M"
    },
    career_highlights: [
      { year: 2009, event: "First Ballon d'Or" },
      { year: 2015, event: "Champions League Treble with Barcelona" },
      { year: 2021, event: "Copa America with Argentina" },
      { year: 2022, event: "World Cup with Argentina" }
    ]
  },
  {
    id: "ronaldo",
    name: "Cristiano Ronaldo",
    clubs: ["Sporting", "Manchester United", "Real Madrid", "Juventus", "Al Nassr"],
    teammates: ["Benzema", "Modric", "Rooney", "Giggs", "Dybala"],
    stats: {
      goals: 850,
      assists: 250,
      championsLeague: 5,
      ballonDor: 5,
      premierLeague: 3,
      laLiga: 2,
      serieA: 2
    },
    attributes: {
      position: "LW/ST",
      nationality: "Portugal",
      age: 39,
      height: "187cm",
      foot: "Right",
      market_value: "15M"
    },
    career_highlights: [
      { year: 2008, event: "First Ballon d'Or" },
      { year: 2016, event: "Euro 2016 with Portugal" },
      { year: 2017, event: "Champions League with Real Madrid" },
      { year: 2019, event: "Nations League with Portugal" }
    ]
  }
  // Add more players...
];

export const seedDatabase = async () => {
  try {
    console.log('Starting database seeding...');
    
    for (const player of initialPlayers) {
      await PlayerService.addPlayer(player);
      console.log(`Added player: ${player.name}`);
    }
    
    console.log('Database seeding completed!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};