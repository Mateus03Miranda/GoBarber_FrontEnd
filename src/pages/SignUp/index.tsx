import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import * as yup from 'yup';
import { Container, Content, Background, Options } from './styles';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

interface FormData {
    name: string;
    email: string;
    password: string;
}

const SignUp: React.FC = () => {
    const FormRef = useRef<FormHandles>(null);
    const handleSubmit = useCallback(async (data: FormData) => {
        try {
            FormRef.current?.setErrors({});

            const schema = yup.object().shape({
                name: yup.string().required('O nome é obrigatório!'),
                email: yup
                    .string()
                    .required('O e-mail é obrigatório!')
                    .email('E-mail inválido'),

                password: yup
                    .string()
                    .min(6, 'A senha deve conter no mínino 6 caracteres!'),
            });
            await schema.validate(data, { abortEarly: false });
        } catch (err) {
            const errors = getValidationErrors(err);
            FormRef.current?.setErrors(errors);
        }
    }, []);
    return (
        <Container>
            <Background />
            <Content>
                <img src={logoImg} alt="GoBarber" />

                <Form ref={FormRef} onSubmit={handleSubmit}>
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
                </Form>
                <Link to="/">
                    <FiArrowLeft />
                    Voltar para login
                </Link>
            </Content>
        </Container>
    );
};

export default SignUp;
