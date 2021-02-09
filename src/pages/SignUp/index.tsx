import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SignUp: React.FC = () => {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Find the Price" />

                <form>
                    <h1>Faça seu Cadastro</h1>

                    <Input name="name" icon={FiUser} placeholder="Nome"/>
                    <Input name="email" icon={FiMail} placeholder="Email"/>
                    <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

                    <Button type="submit">Cadastrar</Button>
                </form>

                <Link to="/"><FiArrowLeft/> Voltar para Logon</Link>
            </Content>

        </Container>
    );
};

export default SignUp;
