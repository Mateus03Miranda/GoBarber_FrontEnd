import React, { useCallback } from 'react';
import { Form } from '@unform/web';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
    const handleSubmit = useCallback(async (data: Record<string, unknown>) => {
        console.log(data);
    }, []);

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="GoBarber" />

                <Form onSubmit={handleSubmit}>
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
                </Form>
                <Link to="signup">
                    <FiLogIn />
                    Criar conta!
                </Link>
            </Content>
            <Background />
        </Container>
    );
};

export default SignIn;
