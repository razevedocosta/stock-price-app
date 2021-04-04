import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight, FiLogOut, FiSettings, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { Title, Form, Repositories, Error } from './styles';

interface Company {
    symbol: string;
    companyName: string;
    latestPrice: number;
    logo: string;
}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [inputError, setInputError] = useState('');

    // Listando do localStorage
    const [repositories, setRepositories] = useState<Company[]>(() => {
        const storagedRepositories = localStorage.getItem('@FindThePrice:stock');

        if (storagedRepositories) {
            return JSON.parse(storagedRepositories);
        }

        return [];
    });

    // Salvando no localStorage
    useEffect(() => {
        localStorage.setItem('@FindThePrice:stock', JSON.stringify(repositories));
    }, [repositories]);

    async function handleClearAll(event: FormEvent<HTMLButtonElement>) {
        event.preventDefault();

        setRepositories([]);
        setNewRepo('');
        setInputError('');
    }

    // Função de buscar repositório
    async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!newRepo) {
            setInputError('Find a valid stock name');
            return;
        }

        try {
            const [response, logo] = await Promise.all([
                api.get(`stock/${newRepo}/quote?token=sk_d04c921978824c95b7716113460f2d79`),
                api.get(`stock/${newRepo}/logo?token=sk_d04c921978824c95b7716113460f2d79`),
            ]);

            const company = response.data;

            // verificar se a companhia ja foi inserida
            const companyItem = repositories.findIndex(company => company.symbol === newRepo.toLocaleUpperCase())

            if (companyItem < 0) {
                company.logo = logo.data.url
                setRepositories([...repositories, company]);
                setNewRepo('');
                setInputError('');
            } else {
                setInputError('Stock already exists');
                return;
            }
        } catch (err) {
            setInputError('Name does not exists');
        }
    }

    return (
        <>
            <Title>
                <h1>Search Stock Price</h1>

                <div>
                    <Link to="/" title="Configurações"> <FiSettings size={20} /></Link>
                    <Link to="/" title="Meu Perfil"> <FiUser size={20} /></Link>
                    <Link to="/" title="Logout"> <FiLogOut size={20} /></Link>
                </div>
            </Title>

            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input placeholder="Search Stock ex: aapl"
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                />
                <button type="submit">Pesquisar</button>
            </Form>

            {inputError && <Error>{inputError}</Error>}

            <Repositories>
                <>
                    {repositories.length > 0 ? <button onClick={handleClearAll}>Limpar</button> : ''}

                    {repositories.map(repository => (
                        <Link key={repository.symbol} to={`/company/${repository.symbol}`}>
                            <img src={repository.logo} alt={repository.companyName} />

                            <div>
                                <strong>{repository.companyName}</strong>
                                <p>{repository.symbol}</p>
                            </div>

                            <p>US$ {repository.latestPrice}</p>

                            <FiChevronRight size={20} />
                        </Link>
                    ))}
                </>
            </Repositories>
        </>
    );
}

export default Dashboard;