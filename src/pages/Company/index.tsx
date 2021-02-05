import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import api from '../../services/api';

// import logoImg from '../../assets/github-logo.svg';
import { Header, CompanyInfo, Card } from './styles';
import Chart from '../Chart';

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

    return (
        <>
            <Header>
                <Link to="/">
                    <FiChevronLeft size={16} /> Voltar
                </Link>
            </Header>

            { company && (
                <CompanyInfo>
                    <header>
                        <img src={logo?.url} alt={company.companyName}></img>

                        <div>
                            <strong>{company.companyName}</strong>
                            <p>US$ {company.latestPrice}</p>
                        </div>
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
                    {news.map(newsItem => (
                        <a key={newsItem.datetime} href={newsItem.url}>
                            <span>{newsItem.headline}</span>
                        </a>
                    ))}
                </div>
                {/* <FiChevronRight size={20} /> */}
            </Card>
        </>
    );
}

export default Company;