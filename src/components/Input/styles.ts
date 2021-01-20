import styled from 'styled-components';

export const Container = styled.div`
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: #666360;
    display: flex;
    align-items: center;
    transition: all 0.2s;
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
        color: #ff9000;
        border-radius: 6px;
    }
    & + div {
        margin-top: 8px;
    }
    svg {
        margin-right: 16px;
    }
`;
