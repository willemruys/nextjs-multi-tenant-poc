import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    .button {
        background: ${({ theme }) => theme.button};
    }
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
        transition: all 0.50s linear;
    }
`;
