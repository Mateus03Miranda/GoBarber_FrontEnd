/* eslint-disable no-unused-expressions */
import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
    isFilled: boolean;
    isErrored: boolean;
    isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: #666360;
    display: flex;
    align-items: center;
    transition: all 0.2s;

    ${props =>
        props.isErrored &&
        css`
            border-color: #c53030;
            svg {
                color: #c53030;
            }
        `}
    ${props =>
        props.isFocused &&
        css`
            padding: 18px;
            color: #ff9000;
            border-radius: 6px;
            border-color: #ff9000;
        `}
    ${props =>
        props.isFilled &&
        css`
            color: #ff9000;
        `}


    input {
        background: transparent;
        flex: 1;
        border: none;
        color: #f4ede8;
        &::placeholder {
            color: #666360;
        }
    }
    &:hover {
        padding: 18px;

        border-radius: 6px;
        border-color: #ff9000;
    }
    &:hover > svg {
        color: #ff9000;
    }
    & + div {
        margin-top: 8px;
    }
    svg {
        margin-right: 16px;
    }
`;

export const Error = styled(Tooltip)`
    margin-left: 16px;
    svg {
        margin: 0;
    }
    span {
        background-color: #c53030;
        color: #f4ede8;
    }
`;
