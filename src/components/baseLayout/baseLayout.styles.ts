import { css, styled } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.blue};
    height: ${theme.sizes.pagesHeight};

    ::-webkit-scrollbar {
      width: 8px;
      height: 32px;
      background: white;
      border-radius: 0px 0px 10px 10px;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px ${theme.colors.white};
      border-radius: 0px 0px 10px 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.blue};
      border-radius: 0px 0px 10px 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.blue};
    }

    .btn-homepage {
      margin-top: 40px;
    }

    .game-content {
      display: flex;
    }

    .players-content {
      display: flex;
      flex-direction: column;
      background: ${theme.colors.gray};
      width: 348px;
      height: 433px;
      border-radius: 8px;

      & .header {
        display: flex;
        flex-direction: row;
        width: 322px;
        height: 24px;
        justify-content: space-between;
        padding: 10px;
        margin-top: 5px;
      }

      & .list {
        display: flex;
        flex-direction: row;
        width: 322px;
        justify-content: space-between;
        padding: 10px;
        margin-top: 5px;
        max-height: 331px;
        overflow: auto;
      }

      & .empty {
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          width: 191px;
          text-align: center;
        }
      }
    }

    .rounds-data {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 450px;
      height: 433px;
      padding: 0px 15px 0px 15px;
    }

    .rounds-data-top {
      display: flex;
      justify-content: space-between;
      width: 450px;
      height: 80px;

      .round {
        width: 113px;
        height: 80px;
        padding: 4px, 32px, 4px, 32px;
        border-radius: 8px;
        background: ${theme.colors.gray};
      }

      .funds {
        width: 321px;
        height: 80px;
        padding: 4px, 16px, 4px, 16px;
        border-radius: 8px;
        background: ${theme.colors.gray};
      }
    }

    .rounds-data-middle {
      display: flex;
      flex-direction: column;
      align-self: center;
    }

    .rounds-data-bottom {
      width: 449px;
      height: 80px;
      border-radius: 8px;
      background: ${theme.colors.gray};
    }
  `}
`;
