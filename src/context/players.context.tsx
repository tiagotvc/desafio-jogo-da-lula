import { TList } from 'interfaces/List/list.interface';
import  { createContext, useState } from 'react';
import { eliminatePlayers } from 'utils/eliminatePlayers';
import { generateRandomPlayers } from 'utils/generateRandomPersons';

const PlayersContext = createContext({
  generateRandomData: () => {},
  playGame: () => {},
  players: [],
  eliminatedPlayers: [],
});

const PlayersContextProvider = ({ children }) => {
  const [players, setPlayers] = useState<TList[]>([]);
  const [eliminatedPlayers, setElimatedPlayers] = useState<TList[]>([])

  const generateRandomData = () => {
    const randomData = generateRandomPlayers(69);
    setPlayers(randomData);
  };

  const playGame = () => {
    const remainingPlayers = players.filter(() => eliminatePlayers())
    const loserList = players.filter((player: TList) => !remainingPlayers.includes(player))
    console.log(loserList.length)
    setPlayers(remainingPlayers)
    setElimatedPlayers([...eliminatedPlayers, ...loserList])
  }

  return (
    <PlayersContext.Provider value={{ players, eliminatedPlayers,  generateRandomData, playGame }}>
      {children}
    </PlayersContext.Provider>
  );
};

export { PlayersContext, PlayersContextProvider };





