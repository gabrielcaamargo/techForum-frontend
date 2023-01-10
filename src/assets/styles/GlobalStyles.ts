import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.textColor};
    padding: 0!important;
    overflow-y: scroll!important;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
  }
`;
