import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  html,
  body {
    font-size: 10px;
  }

  body {
    background-color: #341f97;
  }
`;

export default GlobalStyle;
