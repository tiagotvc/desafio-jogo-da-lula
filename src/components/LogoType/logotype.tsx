import { IBaseLayout } from "interfaces/BaseLayout/baseLayout.interface";
import React from "react";
import { Container } from "./logotype.styles";

export const BaseLayout: React.FC<IBaseLayout> = ({ children }) => {
    return (<Container>{children}</Container>)
}