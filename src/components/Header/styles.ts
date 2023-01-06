import styled from 'styled-components';

export const Container = styled.header`
  display: grid;
  align-items: center;
  grid-template-columns: 2fr 1fr;
  padding: 22px;
  background-color: ${({theme}) => theme.blue.main};

  strong {
    font-size: 24px;
    color: #F7F7F7;
    span {
      color: ${({theme}) => theme.blue.highlight};
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
        border-color: ${({theme}) => theme.blue.highlight}!important;
        box-shadow: none;
      }
    }
  }

`;
