import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
    hasError: boolean;
}

export const Form = styled.form<FormProps>`
    margin-top: 10px;
    max-width: 700px;
    margin: 0 auto;

    display: flex;

    input {
        flex: 1;
        height: 50px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;

        border: 2px solid #fff;
        border-right: 0;
        ${(props) => props.hasError && css`
            border-color: #c53030;
        `}

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        height: 50px;
        background: #0047BB;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #FFF;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#4248F0')};
        }
    }
`;

export const Repositories = styled.div`
    margin-top: 40px;
    max-width: 700px;
    margin: 0 auto;

    button {
        border: 0;
        float: right;
        margin-top: 20px;
        margin-bottom: 4px;
        color: #A8A8B3;

        &:hover {
            color: #3D3D4D;
        }
    }

    a {
        background: #FFF;
        border-radius: 5px;
        width: 100%;
        padding: 12px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: transform 0.2s;

        & + a {
            margin-top: 12px;
        }

        &:hover {
            transform: translateX(10px);
        }

        img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            box-shadow: 1px 1px 1px #A8A8B3;
        }

        div {
            margin: 0 16px;
            flex: 1;

            strong {
                font-size: 18px;
                color: #3D3D4D;
            }

            p {
                font-size: 14px;
                color: #A8A8B3;
                margin-top: 4px;
            }
        }

        svg {
            margin-left: auto;
            color: #3D3D4D;
        }

        p {
            color: #3D3D4D;
        }

    }
`;

export const Error = styled.span`
    width: 700px;
    margin: 0 auto;
    
    display: block;
    color: #c53030;
    margin-top: 5px;
    font-weight: normal;
    font-size: 14px;
`;

