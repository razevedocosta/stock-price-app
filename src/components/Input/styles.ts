import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #fff;
    border-radius: 10px;
    border: 2px solid #f4ede8;
    padding: 6px 12px;
    width: 100%;
    color: #666360;

    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
    }

    ${props => props.isErrored && css`
        border-color: #c53030;
    `}

    ${props => props.isFocused && css`
        color: #0047BB;
        border-color: #0047BB;
    `}

    ${props => props.isFilled && css`
        color: #0047BB;
    `}

    input {
        flex: 1;
        border: 0;
        background: transparent;
        color: #000;
        padding: 8px;

        &::placeholder {
            color: #c4c4c4;
        }
    }

    svg {
        margin-right: 16px;
    }
`;

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;

    svg {
        margin: 0;
    }

    span {
        background: #c53030;
        color: #fff;

        &::before {
            border-color: #c53030 transparent;
        }
    }
`;