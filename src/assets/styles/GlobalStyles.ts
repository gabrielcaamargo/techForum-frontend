import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-family: 'Anybody', sans-serif;
    background-color: ${({theme}) => theme.background}!important;
    color: ${({theme}) => theme.textColor}!important;
  }

  button {
    cursor: pointer;
  }
`;
