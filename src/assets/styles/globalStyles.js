import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 80px 65px 0;
    font-family: 'Montserrat';
    background-color: #F0F0F3;
  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';
  }

  ul {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
