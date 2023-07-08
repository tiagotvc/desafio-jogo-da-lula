import { css, styled } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.blue};
    height: ${theme.sizes.pagesHeight};

    .btn-homepage {
      margin-top: 40px;
    }
  `}
`;
