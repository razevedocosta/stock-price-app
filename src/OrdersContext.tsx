import axios from "axios";
import { createContext, useEffect, useState, ReactNode } from "react";

interface OrderParams {
    id: number;
    company: string;
    type: string;
    quantity: number;
    price: number;
    dateOrder: string;
}

// interface para tipagem do conteúdo recebido pelo provider
interface OrdersProviderProps {
    children: ReactNode;
}

// interface para tipagem do conteúdo que o context irá fornecer
interface OrdersContextData {
    orders: OrderParams[];
    createOrder: (order: OrderInput) => Promise<void>;
}

type OrderInput = Omit<OrderParams, 'id'>;

export const OrdersContext = createContext<OrdersContextData>({} as OrdersContextData);

export function OrdersProvider({ children }: OrdersProviderProps) {
    const [orders, setOrders] = useState<OrderParams[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3333/orders')
            .then((response) => {
                setOrders(response.data);
            });
    }, []);

    async function createOrder(orderInput: OrderInput) {
        await axios.post('http://localhost:3333/orders', orderInput)

        // para exibir na listagem 
        // const { order } = response.data;
        // setOrders([...orders, order]);
    }

    return (
        <OrdersContext.Provider value={{ orders, createOrder }}>
            {children}
        </OrdersContext.Provider>
    );
}