import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        
        background: rgb(35,37,38);
        background: linear-gradient(75deg, rgba(35,37,38,1) 0%, rgba(65,67,69,1) 100%);

        background-repeat: no-repeat;
        background-attachment: fixed;

        box-sizing: border-box;
        height: 100vh;


        color: #eee;

        
    }

    
`;
