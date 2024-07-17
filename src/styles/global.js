import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        display: flex;
        place-items: center;
        justify-content: center;
        min-width: 320px;
        min-height: 100vh;
        line-height: 1.5;

        background-color: ${({ theme }) => theme.color.background};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: "Rubik", sans-serif;
        font-weight: ${({ theme }) => theme.font_weight.small};
        font-size: ${({ theme }) => theme.font_size.normal};
    }

    button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 8px;
        outline: 1px solid transparent;
        box-shadow: none;
        cursor: pointer;
    }

    a {
        text-decoration: inherit;
    }
`