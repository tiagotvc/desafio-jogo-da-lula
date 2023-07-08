import React from "react";
import { Container } from "./button.styles";
import { IButton } from "interfaces/Button/button.interface";

export const Button: React.FC<IButton> = (
  { children, onClick, },
  props
) => {
 
  return (
    <Container
      {...props}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

export default Button;
