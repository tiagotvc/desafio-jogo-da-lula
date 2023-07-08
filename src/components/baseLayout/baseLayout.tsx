import { IBaseLayout } from "interfaces/BaseLayout/baseLayout.interface";
import React from "react";
import { Container } from "./baseLayout.styles";
import { useStyles } from "hooks/useStyles";


export const BaseLayout: React.FC<IBaseLayout> = ({ children, styles }) => {
    const { alterStyles } = useStyles();
    return (<Container style={alterStyles(styles)}>{children}</Container>)
}