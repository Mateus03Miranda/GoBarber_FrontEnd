import React from 'react';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt="GoBarber" />

            <form>
                <h1>Faça seu logon</h1>
                <Input
                    name="email"
                    Icon={FiMail}
                    type="text"
                    placeholder="E-mail"
                />
                <Input
                    name="password"
                    Icon={FiLock}
                    type="password"
                    placeholder="Senha"
                />
                <Button type="submit">Entrar</Button>
                <a href="forgot">Esqueci minha senha</a>
            </form>
            <Link to="signup">
                <FiLogIn />
                Criar conta!
            </Link>
        </Content>
        <Background />
    </Container>
);

export default SignIn;
