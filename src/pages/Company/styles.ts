import styled from 'styled-components';

export const Header = styled.header`
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

export const CompanyInfo = styled.section`
    margin-top: 40px;

    header {
        display: flex;
        align-items: center;

        img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: center;
        }

        div {
            margin-left: 24px;

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
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;

        li {
            & + li {
                margin-left: 80px;
            }

            strong {
                display: block;
                font-size: 22px;
                color: #3d3d4d;
            }

            span {
                display: block;
                margin: 4px 0;
                color: #462A99; //roxo
            }
        }
    }
`;

export const Card = styled.div`
    margin-top: 40px;
    width: 800px;
    height: auto;
    padding: 10px 0;
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
        }

    }
    
`;
