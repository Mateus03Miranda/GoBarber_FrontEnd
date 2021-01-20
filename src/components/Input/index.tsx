import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    Icon?: React.ComponentType;
}

const Input: React.FC<InputProps> = ({ Icon, ...rest }) => (
    <Container>
        {Icon && <Icon />}
        <input type="text" {...rest} />
    </Container>
);
export default Input;
