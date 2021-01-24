import React from 'react';

import { Container } from './styles';

interface TooltipsProps {
    className?: string;
    title: string;
}

const Tooltip: React.FC<TooltipsProps> = ({
    title,
    children,
    className = '',
}) => (
    <Container className={className}>
        {children}
        <span>{title}</span>
    </Container>
);

export default Tooltip;
