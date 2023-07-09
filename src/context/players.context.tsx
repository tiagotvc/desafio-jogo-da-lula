import { TList } from 'interfaces/List/list.interface';
import  { createContext, useState } from 'react';
import { Status } from 'types/Status/status.type';
import { eliminatePlayers } from 'utils/eliminatePlayers';
import { generateRandomPlayers } from 'utils/generateRandomPersons';
import { getRandomYesOrNo } from 'utils/generateRandomYesOrNo';

const PlayersContext = createContext({
  generateRandomData: () => {},
  playGame: () => {},
  playVotation: () => {},
  players: [],
  eliminatedPlayers: [],
  playing: false,
  voting: false,
  status: "playing"
});

const PlayersContextProvider = ({ children }) => {
  const [players, setPlayers] = useState<TList[]>([]);
  const [eliminatedPlayers, setElimatedPlayers] = useState<TList[]>([])
  const [playing, setPlaying] = useState<boolean>(false);
  const [voting, setVoting] = useState<boolean>(false);
  const [status, setStatus] = useState<Status>('playing');

  const generateRandomData = () => {
    const randomData = generateRandomPlayers(69);
    setPlayers(randomData);
  };

  const alterStatus = () => {
    if (status === "playing") setStatus("voting")
    else setStatus("playing")
  } 

  const playGame = () => {
    setPlaying(true)
    setTimeout(() => {
      const remainingPlayers = players.filter(() => eliminatePlayers())
      const loserList = players.filter((player: TList) => !remainingPlayers.includes(player))
      setPlayers(remainingPlayers)
      setElimatedPlayers([...eliminatedPlayers, ...loserList])
      setPlaying(false)
      alterStatus()
    }, 2000)
  }

  const playVotation = () => {
    const updatedVoting = players.map((player: TList) => ({
      name: player.name,
      award: player.award,
      vote: getRandomYesOrNo()
    }))
    setPlayers(updatedVoting)
    setVoting(true)
    setTimeout(() => {
      setVoting(false)
      alterStatus()
    }, 3000)
  }


  return (
    <PlayersContext.Provider value={{ players, eliminatedPlayers, playing, status, voting, generateRandomData, playGame, playVotation }}>
      {children}
    </PlayersContext.Provider>
  );
};

export { PlayersContext, PlayersContextProvider };





