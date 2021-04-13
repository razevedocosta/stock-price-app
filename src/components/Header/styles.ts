import styled from 'styled-components';

export const Container = styled.header`
    background: var(--purple);
`;

export const Content = styled.div`
    max-width: 700px;
    margin: 0 auto;

    padding: 2rem 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        line-height: 46px;
        font-size: 1.25rem;
        margin-left: -0.5rem;
        color: var(--shape);
    }

    a {
        text-decoration: none;
        color: #A8A8B3;
        margin-left: 10px;
        
        &:hover {
            color: var(--shape);
        }
    }

`;