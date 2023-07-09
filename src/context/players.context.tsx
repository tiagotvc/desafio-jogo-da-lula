import  { createContext, useState } from 'react';
import { eliminatePlayers } from 'utils/eliminatePlayers';
import { generateRandomPlayers } from 'utils/generateRandomPersons';

const PlayersContext = createContext({
  generateRandomData: () => {},
  playGame: () => {},
  players: [],
});

const PlayersContextProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);

  const generateRandomData = () => {
    const randomData = generateRandomPlayers(69);
    setPlayers(randomData);
  };

  const playGame = () => {
    const remainingPlayers = players.filter(() => eliminatePlayers())
    setPlayers(remainingPlayers)
  }

  return (
    <PlayersContext.Provider value={{ players, generateRandomData, playGame }}>
      {children}
    </PlayersContext.Provider>
  );
};

export { PlayersContext, PlayersContextProvider };





