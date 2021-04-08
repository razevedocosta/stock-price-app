import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import api from '../../services/api';

// import { PriceChartBox } from './styles';

interface RepositoryParams {
    company: string;
}

interface CompanyParams {
    symbol: string;
    close: number;
    label: string;
}

const PriceChart: React.FC = () => {
    const [company, setRepository] = useState<CompanyParams[]>([]);

    const { params } = useRouteMatch<RepositoryParams>();

     useEffect(() => {
        api.get(`stock/${params.company}/chart?token=sk_d04c921978824c95b7716113460f2d79`)
          .then(response => {
            setRepository(response.data);
          });

    }, [params.company]);

    const data = [
      company.map(comp => (
        {
          name: comp.label, uv: comp.close,
        }
      ))
    ];

    return (
      <>
      <AreaChart width={600} height={300} data={data[0]}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>

      {/* {company.map(comp => (
        <p>{comp.label} --| {comp.close}</p>
      ))} */}
      </>
    );
}

export default PriceChart;
