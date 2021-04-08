import axios from "axios";
import { useEffect, useState } from "react";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

import { Container } from './styles';

interface OrderParams {
    id: number;
    company: string;
    type: string;
    quantity: number;
    price: number;
    dateOrder: string;
}

export function Summary() {
    const [orders, setOrders] = useState<OrderParams[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3333/orders')
            .then((response) => {
                setOrders(response.data);
            });
    }, []);

    const ordersBuy = orders.filter(order => order.type == "buy");
    const coast = ordersBuy.map(order => order.price).reduce((prev, item) => prev + item, 0);
    const value = ordersBuy.map(order => order.price * 5).reduce((prev, item) => prev + item, 0);

    return (
        <Container>
            <div>
                <header>
                    <p>Coast</p>
                    <img src={outcomeImg} alt="" />
                </header>

                <strong>US$ {coast}</strong>
            </div>

            <div>
                <header>
                    <p>Value</p>
                    <img src={incomeImg} alt="" />
                </header>

                <strong>US$ {value}</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Percent</p>
                    <img src={totalImg} alt="" />
                </header>

                <strong>10 %</strong>
            </div>
        </Container>
    )
}