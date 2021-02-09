import React, { useContext } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import AuthContext from '../../contexts/auth';
import { Container, Content } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

const Login: React.FC = () => {
    const { signed, signIn } = useContext(AuthContext);

    console.log(signed);

    async function handleLogin() {
        signIn();
    }

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Find the Price" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <Input name="email" icon={FiMail} placeholder="Email"/>
                    <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

                    <Button type="submit">Entrar</Button>

                    <a href="forgot">Esqueci minha senha</a>
                </form>

                <Link to="/signUp"><FiLogIn/> Criar conta</Link>
            </Content>

        </Container>
    );
};

export default Login;
