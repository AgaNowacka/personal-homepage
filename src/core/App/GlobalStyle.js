import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Inter', sans-serif;
        transition: background 0.3s;
        background: ${({ theme }) => theme.color.white}; 
        color: ${({ theme }) => theme.color.mineShaft}; 
        font-size: 18px;
        letter-spacing: 0.05em;
        word-break: break-word;
        overflow-y: scroll;
        padding-bottom: 108px;
        
        }


`;