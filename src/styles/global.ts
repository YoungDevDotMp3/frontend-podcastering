import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: linear-gradient(34.72deg, #000A25 21.98%, #1B0F37 94.07%);
    color: #FFF;
    -webkit-font-smoothing: antialiased;

  }

  body, input, button {
    font-family: 'Lato', serif;
    font-size: 14px;
    outline: none;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`;
