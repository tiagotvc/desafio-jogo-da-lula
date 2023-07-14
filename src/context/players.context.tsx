import { TList } from "interfaces/List/list.interface";
import { createContext, useState } from "react";
import { Status } from "types/Status/status.type";
import { eliminatePlayers } from "utils/eliminatePlayers";
import { generateRandomPlayers } from "utils/generateRandomPlayers";
import { getRandomYesOrNo } from "utils/generateRandomYesOrNo";

const PlayersContext = createContext({
  generateRandomData: () => {},
  playGame: () => {},
  playVotation: () => {},
  refreshGame: () => {},
  players: [],
  eliminatedPlayers: [],
  playing: false,
  voting: false,
  status: "playing",
  round: 1,
  votesForEndGame: 0,
  awardFunds: 0,
  beginSound: new Audio("/audio/main-theme.mp3"),
  roundSound: new Audio("/audio/red-light-sound.mp3"),
});

const PlayersContextProvider = ({ children }) => {
  const [players, setPlayers] = useState<TList[]>([]);
  const [eliminatedPlayers, setElimatedPlayers] = useState<TList[]>([]);
  const [playing, setPlaying] = useState<boolean>(false);
  const [voting, setVoting] = useState<boolean>(false);
  const [status, setStatus] = useState<Status>("playing");
  const [round, setRound] = useState<number>(1);
  const [votesForEndGame, setVotes] = useState<number>(0);
  const [awardFunds, setAwardFunds] = useState<number>(0);
  const [beginSound] = useState(new Audio("/audio/main-theme.mp3"));
  const [roundSound] = useState(new Audio("/audio/red-light-sound.mp3"));

  const generateRandomData = () => {
    const randomData = generateRandomPlayers(69);
    setPlayers(randomData);
  };

  const alterStatus = () => {
    if (status === "playing") setStatus("voting");
    else setStatus("playing");
  };

  const endGame = () => {
    setStatus("finished");
  };

  const playGame = () => {
    setPlaying(true);
    setTimeout(() => {
      const remainingPlayers = players.filter(() => eliminatePlayers());
      const loserList = players.filter(
        (player: TList) => !remainingPlayers.includes(player)
      );
      const sum = loserList.reduce(function (
        accumulator: number,
        player: TList
      ) {
        return accumulator + player.award;
      },
      0);
      const valueForEachRemaining = sum / remainingPlayers.length;
      const updatedRemainingPlayers = remainingPlayers.map((player: TList) => ({
        ...player,
        award: player.award + valueForEachRemaining,
      }));
      setAwardFunds(awardFunds + sum);
      const updatedLoserList = loserList.map((player: TList) => ({
        ...player,
        award: 0.0,
      }));
      setPlayers(updatedRemainingPlayers);
      setElimatedPlayers([...eliminatedPlayers, ...updatedLoserList]);
      setPlaying(false);
      if (remainingPlayers.length === 0) {
        endGame();
        return;
      }
      alterStatus();
    }, 4000);
  };

  const playVotation = () => {
    const updatedVoting = players.map((player: TList) => ({
      ...player,
      vote: getRandomYesOrNo(),
    }));
    setPlayers(updatedVoting);
    const votesYes = updatedVoting.filter(
      (player: TList) => player.vote === "SIM"
    );
    if (votesYes.length > players.length / 2) {
      setVotes(votesYes.length);
      setStatus("finished")
      endGame();
      return;
    }
    setVoting(true);
    setTimeout(() => {
      setVoting(false);
      setRound(round + 1);
      setVotes(votesYes.length);
      alterStatus();
    }, 3000);
  };

  const refreshGame = () => {
    setElimatedPlayers([]);
    setStatus("playing");
    setRound(1);
    setVotes(0);
    setAwardFunds(0);
  };

  return (
    <PlayersContext.Provider
      value={{
        players,
        eliminatedPlayers,
        playing,
        status,
        voting,
        round,
        votesForEndGame,
        awardFunds,
        beginSound,
        roundSound,
        generateRandomData,
        playGame,
        playVotation,
        refreshGame,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};

export { PlayersContext, PlayersContextProvider };
