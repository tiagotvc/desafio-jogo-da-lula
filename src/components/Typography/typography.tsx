import React from "react";

import { ITypography } from "interfaces/Typography/typography.interface";
import { Container } from "./typography.styles";
import { useStyles } from "hooks/useStyles";

export const Typograph: React.FC<ITypography> = ({
  children,
  variant = "body2",
  styles,
}) => {
  const { alterStyles } = useStyles();
  return (
    <Container styles={alterStyles(styles)} variant={variant}>
      {children}
    </Container>
  );
};
