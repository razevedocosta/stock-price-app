import { useContext, useState } from "react";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { OrdersContext } from "../../OrdersContext";

import { Container } from './styles';

export function Summary() {
    const { orders } = useContext(OrdersContext);
    const [dolar, setDolar] = useState('');

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
    });

    const url = "https://economia.awesomeapi.com.br/json/USD-BRL"
        fetch(url).then((res)=>{
            return res.json()
        }).then((data)=>{
            setDolar(data[0].high) 
        })

    // useEffect(() => {
    //     axios.get("https://economia.awesomeapi.com.br/last/USD-BRL")
    //     .then((response) => {
    //         console.log(response.data)
    //     })
    // }, []);

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

                <strong>US$ {summary.coast * Number(dolar)}</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Dolar</p>
                    <img src={totalImg} alt="" />
                </header>
                
                <strong>US$ {dolar}</strong>
            </div>
        </Container>
    )
}