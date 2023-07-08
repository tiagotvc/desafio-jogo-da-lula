import { IBaseLayout } from "interfaces/baseLayout/baseLayout.interface";
import React from "react";
import { Container } from "./baseLayout.styles";

export const BaseLayout: React.FC<IBaseLayout> = ({ children }) => {
    return (<Container>{children}</Container>)
}