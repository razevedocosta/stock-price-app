import React, { useContext } from 'react';
import { OrdersContext } from '../../OrdersContext';

import { Header } from '../../components/Header';

import { Container } from './styles';

const Orders: React.FC = () => {
    const { orders } = useContext(OrdersContext);

    return (
        <>
            <Header />

            <Container>
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