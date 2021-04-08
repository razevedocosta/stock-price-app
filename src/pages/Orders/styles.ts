import styled from 'styled-components';

export const Title = styled.div`
    max-width: 700px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        line-height: 46px;
        font-size: 20px;
        color: #3A3A3A;
    }

    a {
        text-decoration: none;
        color: #A8A8B3;
        margin-left: 10px;

        &:first-child {
            margin-left: -5px;
        }
        
        &:hover {
            color: #3D3D4D;
        }
    }

`;

export const Container = styled.div`
    max-width: 700px;
    margin: 0 auto;

    table {
        width: 100%;
        border-spacing: 0 0.2rem;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem;
            text-align: left;
        }

        td {
            padding: 0.5rem 1rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child {
                color: var(--text-title);
            }

            &.buy {
                color: var(--green);
            }

            &.sell {
                color: var(--red);
            }
            
        }
    }
`;