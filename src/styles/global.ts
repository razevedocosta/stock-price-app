import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --background: #f1f2f5;
        --red: #e52e4d;
        --green: #04D361;
        --blue: #5429cc;

        --blue-light: #6933ff;
        --purple: #462A99;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: #F0F0F5;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 16px 'Quicksand', sans-serif;
    }

    button {
        cursor: pointer;
    }

    #root {
        /* max-width: 960px; */
        margin: 0 auto;
        /* padding: 40px 20px; */
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 456px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`;