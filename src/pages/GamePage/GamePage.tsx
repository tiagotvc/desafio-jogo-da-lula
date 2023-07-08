import { BaseLayout } from "components/BaseLayout/baseLayout";
import Button from "components/Button/button";
import { List } from "components/List/list";
import SvgComponent from "components/SvgComponent/svgComponent";
import { Typograph } from "components/Typography/typography";

export const GamePage = () => {
  const logoWidth = 290;
  const logoHeight = 140;

  const mock = [
    {
        name: "Tiago Carvalho",
        money: "300"
    },
    {
        name: "Tiago2 Carvalho",
        money: "300"
    },
    {
        name: "Tiago3 carvalho",
        money: "300"
    },
    {
        name: "Tiago Carvalho",
        money: "300"
    },
    {
        name: "Tiago2 Carvalho",
        money: "300"
    },
    {
        name: "Tiago3 carvalho",
        money: "300"
    },
    {
        name: "Tiago Carvalho",
        money: "300"
    },
    {
        name: "Tiago2 Carvalho",
        money: "300"
    },
    {
        name: "Tiago3 carvalho",
        money: "300"
    },
    {
        name: "Tiago Carvalho",
        money: "300"
    },
    {
        name: "Tiago2 Carvalho",
        money: "300"
    },
    {
        name: "Tiago3 carvalho",
        money: "300"
    }
  ]

  const pageStyles = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  };
  return (
    <BaseLayout styles={pageStyles}>
      <SvgComponent variant="squid" width={logoWidth} height={logoHeight} />
      <div className="game-content">
        <div className="players-content left">
            <div className="players-content header">
                <Typograph variant="body3">Participantes</Typograph>
                <Typograph variant="body3">69/69</Typograph>
            </div>
            <div className="players-content list">
                <List items={mock}/>
            </div>
            
        </div>
        <div className="rounds-data">
          <div className="rounds-data-top">
            <div className="round">
              <Typograph variant="body3">Round</Typograph>
              01
            </div>
            <div className="funds">
              <Typograph variant="body3">Fundos do Prêmio</Typograph>
              $00.00
            </div>
          </div>
          <div className="rounds-data-middle">
            <SvgComponent variant="soldier" width={159} height={136}/>
            <Button width={152} height={44}><Typograph variant="body3">Iniciar Rodada</Typograph></Button>
          </div>
          <div className="rounds-data-bottom">
           
          </div>
        </div>
        <div className="players-content right">
        <div className="players-content header">
                <Typograph variant="body3">Participantes Eliminados</Typograph>
                <Typograph variant="body3">69/69</Typograph>
            </div>
        </div>
      </div>
    </BaseLayout>
  );
};
