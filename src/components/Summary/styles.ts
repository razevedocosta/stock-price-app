import styled from 'styled-components';

export const Container = styled.div`
    max-width: 700px;
    margin: 0 auto; 
    padding:0 1rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: -2rem;
    margin-bottom: 1.5rem;

    div {
        background: var(--shape);
        padding: 1rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            margin-top: 0.5rem;
            font-size: 1.5rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlight-background {
            background: var(--green);
            color: #fff;
        }
    }
`;