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
        display: flex;
        align-items: center;
        transition: all 0.3s;

        svg {
            margin-right: 16px;
            transition: margin-right 0.3s;
        }
        &:hover {
            color: #b56600;
            margin-left: 15px;
        }
        &:hover > svg {
            margin-right: 13px;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${signInBackgroundImg}) no-repeat center;
    background-size: cover;
`;
