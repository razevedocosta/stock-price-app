import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiPlusCircle } from 'react-icons/fi';
import { FiLogOut, FiSettings, FiUser, FiBookOpen } from 'react-icons/fi';
import Modal from "react-modal";

import api from '../../services/api';

// import logoImg from '../../assets/github-logo.svg';
import { Title, CompanyInfo, Card } from './styles';
import Chart from '../Chart';
import { NewOrderModal } from '../../components/NewOrderModal';

Modal.setAppElement('#root');

interface RepositoryParams {
    company: string;
}

interface CompanyParams {
    symbol: number;
    companyName: string;
    latestPrice: number;
    marketCap: number;
    peRatio: number;
    week52High: number;
    week52Low: number;
}

interface Logo {
    url: string;
}

interface CompanyNews {
    datetime: string;
    headline: string;
    url: string;
    summary: string;
    image: string;
}

const Company: React.FC = () => {
    const [company, setRepository] = useState<CompanyParams | null>(null);
    const [logo, setLogo] = useState<Logo | null>(null);
    const [news, setNews] = useState<CompanyNews[]>([]);

    const { params } = useRouteMatch<RepositoryParams>();

    useEffect(() => {
        api.get(`stock/${params.company}/quote?token=sk_d04c921978824c95b7716113460f2d79`).then(response => {
            setRepository(response.data);
        });

        api.get(`stock/${params.company}/logo?token=sk_d04c921978824c95b7716113460f2d79`).then(response => {
            setLogo(response.data);
        });

        api.get(`stock/${params.company}/news?token=sk_d04c921978824c95b7716113460f2d79`).then(response => {
            setNews(response.data);
        });
    }, [params.company]);

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    // async function loadData(): Promise<void> {
    //     const [ company, logo, news ] = await Promise.all([
    //         api.get(`stock/${params.company}/quote?token=sk_d04c921978824c95b7716113460f2d79`),
    //         api.get(`stock/${params.company}/logo?token=sk_d04c921978824c95b7716113460f2d79`),
    //         api.get(`stock/${params.company}/news?token=sk_d04c921978824c95b7716113460f2d79`)
    //     ]);

    //     setRepository(company.data);
    // }
    // loadData();

    return (
        <>
            {/* <Header>
                <Link to="/dashboard">
                    <FiChevronLeft size={16} /> Voltar
                </Link>
            </Header> */}

            <Title>
                <Link to="/dashboard">
                    Voltar
                </Link>

                <div>
                    <Link to="/orders" title="Orders"> <FiBookOpen size={20} /></Link>
                    <Link to="/" title="Settings"> <FiSettings size={20} /></Link>
                    <Link to="/" title="Profile"> <FiUser size={20} /></Link>
                    <Link to="/" title="Logout"> <FiLogOut size={20} /></Link>
                </div>
            </Title>

            {company && (
                <CompanyInfo>
                    <header>
                        <div>
                            <img src={logo?.url} alt={company.companyName}></img>
                            <strong>{company.companyName}<br/>US$ {company.latestPrice}</strong>
                        </div>

                        <button onClick={handleOpenNewTransactionModal}><FiPlusCircle /> Order</button>
                    </header>

                    <ul>
                        <li>
                            <strong>{company.marketCap}</strong>
                            <span>Market Cap</span>
                        </li>
                        <li>
                            <strong>{company.peRatio}</strong>
                            <span>Ratio</span>
                        </li>
                        <li>
                            <strong>{company.latestPrice}</strong>
                            <span>Latest Price</span>
                        </li>
                        <li>
                            <strong>{company.week52High}</strong>
                            <span>Week 52 High</span>
                        </li>
                        <li>
                            <strong>{company.week52Low}</strong>
                            <span>Week 52 Low</span>
                        </li>
                    </ul>
                </CompanyInfo>
            )}

            <Card>
                <div>
                    <strong>Historical Prices</strong>

                    <Chart></Chart>
                </div>
            </Card>

            <Card>
                <div>
                    <strong>News</strong>
                    <>
                        {news.map(newsItem => (
                            <a key={newsItem.datetime} href={newsItem.url} target="_blank" rel="noreferrer">
                                <div>
                                    <img src={newsItem.image} alt="Imagem"></img>

                                    <div>
                                        <p>{newsItem.headline} ({new Date(newsItem.datetime).toLocaleDateString('pt-BR')})</p>
                                        <span>{newsItem.summary}</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </>
                </div>
            </Card>

            <NewOrderModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
            />
        </>
    );
}

export default Company;