import { css, styled } from "styled-components";

export const Container = styled.ul`
  ${() => css`
    display: flex;
    width: 316px;
    flex-direction: column;
    list-style: none;
    text-align: center;
    margin: 0;
    padding: 0;
    max-height: 361px;

    li {
      display: flex;
      justify-content: space-between;
      height: 64px;
      border-bottom: 1px solid white;
      align-items: center;
    }

    .avatar-and-name {
      display: flex;
      width: 160px;
      justify-content: left;
      align-items: center;
      height: 64px;

      span {
        margin-left: 15px;
      }
    }

    .award-and-voting {
      display: flex;
      width: 98px;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    img {
      border-radius: 50%;
    }
  `}
`;
