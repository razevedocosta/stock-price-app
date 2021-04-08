import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import { FiCheckCircle } from 'react-icons/fi';
import { Container, RadioBoxContainer, RadioBox } from "./styles";
import { FormEvent, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import axios from "axios";

interface NewOrderModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

interface CompanyParams {
    company: string;
}

export function NewOrderModal({ isOpen, onRequestClose }: NewOrderModalProps) {
    const [type, setType] = useState('buy');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState(0);
    const [dateOrder, setDateOrder] = useState('');

    const history = useHistory();

    const { params } = useRouteMatch<CompanyParams>();
    const company = params.company;

    function handleCreateNewOrder(event: FormEvent) {
        event.preventDefault();

        const data = {
            company, quantity, price, dateOrder, type
        }

        axios.post('http://localhost:3333/orders', data)
        .then((response) => {
            history.push('/dashboard');
        });
        
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Close" />
            </button>

            <Container onSubmit={handleCreateNewOrder}>
                <h2>New Order</h2>

                <input placeholder="Company"
                       value={company} onChange={event => setQuantity(event.target.value)} />

                <RadioBoxContainer>
                    <RadioBox type="button" onClick={() => {setType('buy');}}
                              isActive={type === 'buy'} activeColor="green">
                        <img src={incomeImg} alt="buy"/>
                        <span>Buy</span>
                    </RadioBox>

                    <RadioBox type="button" onClick={() => {setType('sell');}}
                              isActive={type === 'sell'} activeColor="red">
                        <img src={outcomeImg} alt="sell"/>
                        <span>Sell</span>
                    </RadioBox>
                </RadioBoxContainer>

                <input placeholder="Quantity"
                       value={quantity} onChange={event => setQuantity(event.target.value)} />

                <input placeholder="Price" type="number" 
                       value={price} onChange={event => setPrice(Number(event.target.value))} />

                <input placeholder="Date"
                       value={dateOrder} onChange={event => setDateOrder(event.target.value)} />

                <button type="submit"><FiCheckCircle /> Save</button>

            </Container>
        </Modal>
    );
}