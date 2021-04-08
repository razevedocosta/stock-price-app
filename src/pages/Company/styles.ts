import styled from 'styled-components';

export const Header = styled.header`
    max-width: 700px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #a8a8b3;
        transition: color 0.2s;

        &:hover {
            color: #666;
        }

        svg {
            margin-right: 4px;
        }
    }
`;

export const Title = styled.div`
    max-width: 700px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

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

export const CompanyInfo = styled.section`
    max-width: 700px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;

    header {
        max-width: 700px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        div {
            display: flex;
            align-items: center;
            justify-content: center;
            
            img {
                width: 120px;
                height: 120px;
                border-radius: 50%;
                background: center;
                margin-right: 24px;
            }

            strong {
                font-size: 24px;
                color: #3d3d4d;
            }

            p {
                font-size: 16px;
                color: #737380;
                margin-top: 4px;
            }
        }

        button {
            width: auto;
            height: 42px;
            padding: 0 10px;
            background: #0047BB;
            border-radius: 0.25rem;
            border: 0;

            color: #fff;
            font-weight: 600;
            font-size: 1rem;

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
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;

        li {
            & + li {
                margin-left: 44px;
            }

            strong {
                display: block;
                font-size: 20px;
                color: #3d3d4d;
            }

            span {
                display: inline-block;
                width: 100px;
                font-size: 14px;
                margin: 4px 0;
                color: #462A99; //roxo
            }
        }
    }
`;

export const Card = styled.div`
    max-width: 700px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-bottom: 20px;
    
    background: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    box-shadow: 3px 3px 3px #A8A8B3;

    div {
        margin: 0 16px;
        padding-top: 10px;
        flex: 1;

        strong {
            font-size: 16px;
            color: #3D3D4D;
            display: block;
            margin-bottom: 10px;
        }

        strong::before {
            content: "🟊";
            margin-right: 8px;
        }

        a {
            text-decoration: none;
            font-size: 14px;
            line-height: 18px;
            color: #3D3D4D;
            display: block;
            margin-bottom: 5px;
            transition: color 0.2s;

            &:hover {
                color: #0047BB;
            }
        
        div {
            font-size: 12px;

            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-direction: row;

            img {
                width: 80px;
                height: 80px;
                border-radius: 50%;
                box-shadow: 2px 2px 2px #A8A8B3;
            }

            p {
                display: block;
                font-size: 14px;
                font-weight: bold;
                color: #000;
                margin-bottom: 4px;
            }

            span {
                overflow: hidden;
                display: block;
                max-height: 40px;

                display: flex;
                flex: 1;
            }

            div {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }
        }

        }

        

    }
    
`;
