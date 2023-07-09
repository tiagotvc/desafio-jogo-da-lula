import { BaseLayout } from "components/BaseLayout/baseLayout";
import Button from "components/Button/button";
import SvgComponent from "components/SvgComponent/svgComponent";
import { Typograph } from "components/Typography/typography";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PlayersContext } from "context/players.context";

export const HomePage  = () => {
  const navigate = useNavigate();
  const { generateRandomData: generateRandomPlayers} = useContext(PlayersContext);

  const gamePagePath = "/gamePage";
  const logoWidth = 367;
  const logoHeight = 177;

  const pageStyles = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const onBeginGame = () => {
    generateRandomPlayers()
    navigate(gamePagePath)
  }

  return (
    <BaseLayout styles={pageStyles}>
      <SvgComponent variant="squid" width={logoWidth} height={logoHeight} />
      <div className="btn-homepage">
        <Button onClick={onBeginGame}>
          <Typograph variant="body3">Iniciar</Typograph>
        </Button>
      </div>
    </BaseLayout>
  );
};
