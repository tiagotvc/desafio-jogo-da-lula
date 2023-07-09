import { IButtonStyles } from "interfaces/Button/button.interface";
import styled, { css } from "styled-components";

export const Container = styled.button<IButtonStyles>`
  ${({ theme, loading }) => css`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 10px 27px 10px 27px;
    border-radius: 8px;
    background: ${loading === "true" ? theme.colors.gray02 : theme.colors.pink};
    color: ${theme.colors.white};
    border: none;
    cursor: pointer;
  `}
`;
