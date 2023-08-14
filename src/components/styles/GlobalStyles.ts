import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        font-family: Inter;
        font-size: 16px;
        font-weight: 500;
        color: #161616;
        background-color: #FFF7ED;
    }
    
    button {
        font-family: Inter;
        cursor: pointer;
    }
`

export default GlobalStyles;