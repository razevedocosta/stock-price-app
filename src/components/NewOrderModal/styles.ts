import styled from 'styled-components';
import { darken, transparentize } from "polished";

export const Container = styled.form`
    h2 {
        color: var(--text-tile);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        display: block;
        width: 100%;
        padding: 0 1rem;
        height: 3rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 3rem;
        border-radius: 0.25rem;

        border: 0;
        background: var(--green);

        color: #fff;
        font-weight: 600;
        font-size: 1rem;

        margin-top: 1.5rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            margin-right: 10px;
        }
    }
`;

export const RadioBoxContainer = styled.div`
    margin: 1rem 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#33cc95',
    red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 3rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.isActive 
        ? transparentize(0.9, colors[props.activeColor]) 
        : 'transparent'};

    transition: border-color 0.2s;

    &:hover {
        border-color: ${darken(0.1, '#d7d7d7')};
    }

    img {
        width: 20px;
        height: 20px;
    }

    span {
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }
`;