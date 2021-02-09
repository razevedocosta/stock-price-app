import styled from 'styled-components';

export const Container = styled.div`
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