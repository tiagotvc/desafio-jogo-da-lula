import { css, styled } from "styled-components";
import { ITypography } from "interfaces/Typography/typography.interface";

export const Container = styled.span<ITypography>`
  ${({ theme, variant }) => css`
    font-size: ${theme.typograph.fontSize[variant]};
    line-height: 24px;
    color: ${theme.colors.white};
    font-weight: ${theme.typograph.weight[variant]};
    font-family: ${theme.typograph.family};
  `}
`;
