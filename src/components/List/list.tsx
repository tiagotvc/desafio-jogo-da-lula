import React, { useContext } from "react";
import { Container } from "./list.styles";
import { IList, TList } from "interfaces/List/list.interface";
import { Typograph } from "components/Typography/typography";
import { PlayersContext } from "context/players.context";

export const List: React.FC<IList> = ({ items, type }) => {
  const { voting } = useContext(PlayersContext);
  return (
    <Container>
      {items.map((item: TList) => (
        <li key={item.name}>
          <div className="avatar-and-name">
            <img src="/images/avatar.png" alt="" width={32} height={32} />
            <Typograph variant="body4">{item.name}</Typograph>
          </div>
          <div className="award-and-voting">
            <Typograph variant="body3">
              {voting && type === "players"
                ? item.vote
                : `$ ${Number(item.award).toLocaleString(["de-DE"], {
                    style: "decimal",
                    minimumIntegerDigits: type === "losers" ? 1 : 2,
                    minimumFractionDigits: 2,
                  })}`}
            </Typograph>
          </div>
        </li>
      ))}
    </Container>
  );
};
