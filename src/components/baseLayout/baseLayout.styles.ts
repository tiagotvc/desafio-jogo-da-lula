import { css, styled } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.blue};
    height: ${theme.sizes.pagesHeight};

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
      gap: 16px;
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
