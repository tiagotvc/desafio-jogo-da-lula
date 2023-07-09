import React from "react";
import { Container } from "./button.styles";
import { IButton } from "interfaces/Button/button.interface";

export const Button: React.FC<IButton> = (
  { children, onClick, loading = false },
  props
) => {
  return (
    <Container {...props} onClick={onClick} loading={loading.toString()}>
      {children}
    </Container>
  );
};

export default Button;
