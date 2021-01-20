import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Container, Content, Background, Options } from './styles';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => (
    <Container>
        <Background />
        <Content>
            <img src={logoImg} alt="GoBarber" />

            <form>
                <Options>
                    <span>Sou cliente</span>
                    <span>Sou cabeleireiro</span>
                </Options>
                <Input
                    name="name"
                    Icon={FiUser}
                    type="text"
                    placeholder="Nome"
                />
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
            </form>
            <Link to="/">
                <FiArrowLeft />
                Voltar para login
            </Link>
        </Content>
    </Container>
);

export default SignUp;
