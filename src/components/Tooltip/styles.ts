import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    &:hover > span {
        visibility: visible;
        opacity: 1;
        margin-left: 25px;
    }

    span {
        padding: 6px;
        border-style: solid;
        border-width: 6px 10px 0 10px;
        border-color: transparent transparent transparent #312e38;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        opacity: 0;
        transition: all 0.4s;
        position: absolute;
        width: 160px;
        top: -60%;
        visibility: hidden;
    }
`;
