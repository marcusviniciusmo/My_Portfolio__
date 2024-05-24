import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, button, input, textarea {
    font-family: sans-serif;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    text-decoration: none;
  }

  &:focus {
    outline: 0;
  }
`;
