import React from 'react';

import { ITypography } from 'interfaces/Typography/typography.interface';
import { Container } from './typography.styles';

export const Typograph: React.FC<ITypography> = ({ children, variant = 'body3' }) => {
    return <Container variant={variant}>{children}</Container>
}