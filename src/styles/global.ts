import { createGlobalStyle } from 'styled-components';

import ScreenSizes from './screenSizes';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  * {
    font-family: 'Mulish', 'Work Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    min-height: 100%;
    height: 100%;
    overflow: auto;
  }

  button {
    cursor: pointer;
    background: none;
    border: 0;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  @media (max-width: ${ScreenSizes.medium}) {
    html {
      font-size: 12px;
    }
  }

  @media (max-width: ${ScreenSizes.small}) {
    html {
      font-size: 10px;
    }
  }
`;
