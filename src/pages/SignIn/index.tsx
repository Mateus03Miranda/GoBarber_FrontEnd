import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

interface FormData {
    email: string;
    password: string;
}
const SignIn: React.FC = () => {
    const FormRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: FormData) => {
        FormRef.current?.setErrors({});

        try {
            const schema = yup.object().shape({
                email: yup
                    .string()
                    .email('E-mail inválido')
                    .required('O e-mail é obrigatório!'),
                password: yup.string().required('A senha é obrigatória!'),
            });
            await schema.validate(data, { abortEarly: false });
        } catch (err) {
            const errors = getValidationErrors(err);
            FormRef.current?.setErrors(errors);
        }
    }, []);

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="GoBarber" />

                <Form ref={FormRef} onSubmit={handleSubmit}>
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
