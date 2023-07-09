import React, { useContext } from "react";
import { Container } from "./list.styles";
import { IList, TList } from "interfaces/List/list.interface";
import { Typograph } from "components/Typography/typography";
import { PlayersContext } from "context/players.context";

export const List: React.FC<IList> = ({ items }) => {
  const { voting } = useContext(PlayersContext);
  return (
    <Container>
      {items.map((item: TList) => (
        <li>
          <div className="avatar-and-name">
            <img src="/images/avatar.png" alt="" width={32} height={32} />
            <Typograph variant="body3">{item.name}</Typograph>
          </div>
          <div className="award-and-voting">
            <Typograph variant="body3">{voting ? item.vote :`$ ${Number(item.award).toLocaleString(
              ["de-DE"],
              {
                style: "decimal",
                minimumIntegerDigits: 2,
                minimumFractionDigits: 2,
              }
            )}`}</Typograph>

          </div>
         
        </li>
      ))}
    </Container>
  );
};
