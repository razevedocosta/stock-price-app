import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    place-content: center;

    width: 100%;
    max-width: 700px;
    margin: 0 auto;

    form {
        margin: 40px 0;
        width: 300px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
            font-size: 20px;
        }
        
        a {
            color: #c8c8c8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: background-color 0.2s;
            
            &:hover {
                color: ${shade(0.2, '#462A99')};
            }
        }
    }

    > a {
        color: #0047BB;
        display: flex;
        align-items: center;

        margin-top: 24px;
        text-decoration: none;
        transition: background-color 0.2s;
        
        &:hover {
            color: ${shade(0.2, '#ff9000')};
        }

        svg {
            margin-right: 16px;
        }
    }
`;