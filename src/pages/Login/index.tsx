import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Login: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: object) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                email: Yup.string().required('Email obrigatório').email('Digite um email válido'),
                password: Yup.string().required('Senha obrigatória'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });
        } catch (err) {
            console.log(err);

            const errors = getValidationErrors(err);

            formRef.current?.setErrors(errors);
        }
    }, []);

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Find the Price" />

                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu logon</h1>

                    <Input name="email" icon={FiMail} placeholder="Email"/>
                    <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

                    <Link to="/dashboard"><Button>Entrar</Button></Link>

                    <a href="forgot">Esqueci minha senha</a>
                </Form>

                <Link to="/signUp"><FiLogIn/> Criar conta</Link>
            </Content>

        </Container>
    );
};

export default Login;
