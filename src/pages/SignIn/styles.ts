import styled from 'styled-components';
import signInBackgroundImg from '../../assets/sign-in-background.png';

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

        input {
            background: #232129;
            border-radius: 10px;
            border: 2px solid #232129;
            padding: 16px;
            width: 100%;
            color: #f4ede8;
            &::placeholder {
                color: #666360;
            }
            & + input {
                margin-top: 8px;
            }
        }

        button {
            background: #ff9000;
            height: 56px;
            border-radius: 10px;
            border: none;
            padding: 0 16px;
            color: #312e38;
            width: 100%;
            font-weight: 500;
            margin-top: 16px;
            margin-bottom: 24px;
            transition: all 0.3s;
            &:hover {
                background: #b56600;
                border-radius: 2px;
            }
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
        color: #ff9000;
        text-decoration: none;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        svg {
            margin-right: 16px;
        }
        &:hover {
            color: #b56600;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${signInBackgroundImg}) no-repeat center;
    background-size: cover;
`;
