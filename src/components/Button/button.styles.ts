import styled, { css } from "styled-components";

export const Container = styled.button`
  ${({ theme }) => css`
    display: flex;
    text-align: center;
    padding: 10px 20px 10px 20px;
    border-radius: 8px;
    background: ${theme.colors.pink};
    color: ${theme.colors.white};
    border: none;
    cursor: pointer;
  `}
`;
