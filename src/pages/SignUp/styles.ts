import styled from 'styled-components';
import signUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    width: 100%;
    max-width: 700px;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }

        a {
            color: #f4ede8;
            text-decoration: none;
            transition: all 0.3s;
            &:hover {
                color: #b3adaa;
            }
        }
    }

    > a {
        color: #f4ede8;
        text-decoration: none;
        display: flex;
        align-items: center;
        transition: all 0.3s;

        svg {
            margin-right: 16px;
            transition: all 0.3s;
        }
        &:hover {
            color: #b3adaa;
            margin-right: 10px;
            margin-left: 4px;
        }
        &:hover > svg {
            margin-right: 12px;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${signUpBackgroundImg}) no-repeat center;
    background-size: cover;
`;

export const Options = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;

    span {
        font-weight: 500;
        position: relative;
        cursor: pointer;
        &:first-child::before {
            content: '';
            position: absolute;
            height: 2px;
            top: 0;
            left: 0;
            width: 100%;
            margin-top: 30px;
            border-radius: 4px;
            background-color: #ff9000;
        }
    }
`;
