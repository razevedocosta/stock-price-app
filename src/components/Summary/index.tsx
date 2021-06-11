import { useContext, useState } from "react";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { OrdersContext } from "../../OrdersContext";

import { Container } from './styles';

interface Company {
    symbol: string;
    companyName: string;
    latestPrice: number;
    logo: string;
}

export function Summary() {
    const { orders } = useContext(OrdersContext);

    const summary = orders.reduce((acc, order) => {
        if (order.type === 'buy') {
            acc.coast += order.price * order.quantity;
            acc.total += order.price;
        } else {
            acc.value += order.price;
            acc.total -= order.price;
        }

        return acc;
    }, {
        coast: 0,
        value: 0,
        total: 0,
    })



    return (
        <Container>
            <div>
                <header>
                    <p>Coast</p>
                    <img src={outcomeImg} alt="" />
                </header>

                <strong>US$ {summary.coast}</strong>
            </div>

            <div>
                <header>
                    <p>Value</p>
                    <img src={incomeImg} alt="" />
                </header>

                <strong>US$ {summary.value}</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Dolar</p>
                    <img src={totalImg} alt="" />
                </header>

                <strong>US$ 5,314</strong>
            </div>
        </Container>
    )
}