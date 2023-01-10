import styled from 'styled-components';

export const Container = styled.header`
  .header {
    display: grid;
    align-items: center;
    grid-template-columns: 2fr 1fr;
  }
  height: 360px;

  padding: 22px;
  background-color: transparent;
  background-image: url("src/assets/images/banner.jpg");
  background-position: center;
  background-size: cover;
  background-origin: content-box;

  strong {
    font-size: 24px;
    color: #F7F7F7;
    font-family: "Anybody", sans-serif;
    span {
      color: ${({theme}) => theme.highlight};
    }
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
  justify-content: flex-end;

  .chakra-input__group {
    input {
      border-width: 2px;
      font-size: 16px;
      &:focus {
        border-color: ${({theme}) => theme.highlight}!important;
        box-shadow: none;
      }
    }
  }
`;
