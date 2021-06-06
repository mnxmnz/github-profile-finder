import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;

    a {
      text-decoration: none;
    }
  }

  html,
  body {
    font-family: 'IBMPlexSansKR-Regular';
    font-size: 10px;
  }

  body {
    display: flex;
    justify-content: center;
    padding: 10rem;
  }
`;

export default GlobalStyle;
