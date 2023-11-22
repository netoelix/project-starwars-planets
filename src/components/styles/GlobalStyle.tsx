import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      color: #FFF;
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 800;
      text-align: center;
    }
    
    body {
        background-image: url('public/images/mac-book-air-11.png');
        background-repeat: no-repeat;
        background-size: cover;
    }
  `;
