import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  #root {
    button {
      cursor: pointer;
    }

    a {
      text-decoration: none;
    }
  }
`;
