import { BaseLayout } from "components/BaseLayout/baseLayout";
import Button from "components/Button/button";
import { List } from "components/List/list";
import SvgComponent from "components/SvgComponent/svgComponent";
import { Typograph } from "components/Typography/typography";
import { PlayersContext } from "context/players.context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const GamePage = () => {
  const navigate = useNavigate();
  const {
    players,
    eliminatedPlayers,
    playing,
    status,
    voting,
    round,
    votesForEndGame,
    awardFunds,
    roundSound,
    beginSound,
    playGame,
    playVotation,
    refreshGame,
  } = useContext(PlayersContext);


  const message = "Nenhum participante eliminado até o momento";
  const logoWidth = 290;
  const logoHeight = 140;

  const pageStyles = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  };

  const btnMessage = () => {
    if (status === "playing" && !playing) return "Iniciar Rodada";
    else if (status === "voting" && !voting) return "Iniciar Votação";
    else if (status === "finished") return "Finalizar Jogo";
    else if (playing) return "Eliminando participantes...";

    return "Votação Acontecendo...";
  };

  const onClickButton = () => {
    switch (status) {
      case "playing":
        playGame();
        beginSound.pause();
        roundSound.play();
        break;
      case "voting":
        playVotation();
        break;
      case "finished":
        refreshGame();
        navigate("/");
        break;
      default:
        playGame();
    }
  };

  return (
    <BaseLayout styles={pageStyles}>
      <SvgComponent variant="squid" width={logoWidth} height={logoHeight} />
      <div className="game-content">
        <div className="players-content left">
          <div className="players-content header">
            <Typograph variant="body3">Participantes</Typograph>
            <Typograph variant="body3">{`${players.length}/69`}</Typograph>
          </div>
          <div className="players-content list">
            <List items={players} type="players" />
          </div>
        </div>
        <div className="rounds-data">
          <div className="rounds-data-top">
            <div className="round">
              <Typograph variant="body4">Round</Typograph>
              <Typograph variant="body1">{round}</Typograph>
            </div>
            <div className="funds">
              <Typograph variant="body4">Fundos do Prêmio</Typograph>
              <Typograph variant="body1">{`$ ${awardFunds.toLocaleString(
                ["de-DE"],
                {
                  style: "decimal",
                  minimumIntegerDigits: 2,
                  minimumFractionDigits: 2,
                }
              )}`}</Typograph>
            </div>
          </div>
          <div className="rounds-data-middle">
            <SvgComponent variant="soldier" width={159} height={136} />
            <Button onClick={onClickButton} loading={playing || voting}>
              <Typograph variant="body3">{btnMessage()}</Typograph>
            </Button>
          </div>
          <div className="rounds-data-bottom">
            <Typograph variant="body4">Votos para o fim do jogo</Typograph>
            <Typograph variant="body1">{votesForEndGame}</Typograph>
          </div>
        </div>
        <div className="players-content right">
          <div className="players-content header">
            <Typograph variant="body3">Participantes Eliminados</Typograph>
            <Typograph variant="body3">{`${eliminatedPlayers.length}/69`}</Typograph>
          </div>
          {eliminatedPlayers.length > 0 && (
            <div className="players-content list">
              <List items={eliminatedPlayers} type="losers" />
            </div>
          )}
          {eliminatedPlayers.length === 0 && (
            <div className="players-content empty">
              <Typograph variant="body3">{message}</Typograph>
            </div>
          )}
        </div>
      </div>
    </BaseLayout>
  );
};
