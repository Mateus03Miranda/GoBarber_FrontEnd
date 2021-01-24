import React, {
    InputHTMLAttributes,
    useEffect,
    useRef,
    useCallback,
    useState,
} from 'react';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';
import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    Icon?: React.ComponentType;
}

const Input: React.FC<InputProps> = ({ name, Icon, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { registerField, fieldName, error } = useField(name);
    const [isFilled, setIsFilled] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const handleInputFilled = useCallback(() => {
        setIsFilled(!!inputRef.current?.value);
        setIsFocused(false);
    }, []);
    const handleInputFocused = useCallback(() => {
        setIsFocused(true);
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [registerField, fieldName]);
    return (
        <Container
            isErrored={!!error}
            isFilled={isFilled}
            isFocused={isFocused}
        >
            {Icon && <Icon />}
            <input
                onBlur={handleInputFilled}
                onFocus={handleInputFocused}
                ref={inputRef}
                type="text"
                {...rest}
            />
            {error && (
                <Error title={error}>
                    <FiAlertCircle size="20" color="c53030" />
                </Error>
            )}
        </Container>
    );
};
export default Input;
