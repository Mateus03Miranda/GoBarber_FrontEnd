import React, {
    InputHTMLAttributes,
    useEffect,
    useRef,
    useCallback,
    useState,
} from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    Icon?: React.ComponentType;
}

const Input: React.FC<InputProps> = ({ name, Icon, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { registerField, defaultValue, fieldName, error } = useField(name);
    const [isFilled, setIsFilled] = useState(false);
    const handleInputFilled = useCallback(() => {
        setIsFilled(!!inputRef.current?.value);
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [registerField, fieldName]);
    return (
        <Container isFilled={isFilled}>
            {Icon && <Icon />}
            <input
                onBlur={handleInputFilled}
                ref={inputRef}
                type="text"
                {...rest}
            />
            {error}
        </Container>
    );
};
export default Input;
