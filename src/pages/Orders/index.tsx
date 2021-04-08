import React from 'react';
import axios from 'axios';

import { useState, useEffect } from 'react';
import { FiLogOut, FiSettings, FiUser, FiBookOpen } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Title, Container } from './styles';

interface OrderParams {
    id: number;
    company: string;
    type: string;
    quantity: number;
    price: number;
    dateOrder: string;
}

const Orders: React.FC = () => {
    const [orders, setOrders] = useState<OrderParams[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3333/orders')
            .then((response) => {
                setOrders(response.data);
            });
    }, []);

    return (
        <>
            <Title>
            {/* <h1>Search Stock Price</h1> */}
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

            <Container>
                <h1>Orders</h1>

                <table>
                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>Company</th>
                            <th>Type</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.company}</td>
                                <td className={order.type}>{order.type}</td>
                                <td>{order.quantity}</td>
                                <td>{order.price}</td>
                                <td>{order.dateOrder}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>
        </>
    );
}

export default Orders;