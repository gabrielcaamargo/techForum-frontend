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

  #theme-menu {
    transition: none;
    &:hover {
      background: none;
    }
  }

`;

export const Input = styled.input`
  padding: 6px 16px;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  background-color: rgba(0, 0, 0, 0.5);
  color: #F5F5F5;
  transition: all 0.3s ease-in-out;
  backdrop-filter: blur(5px);
  &::placeholder {
    color: #F5F5F5;
  }

  &:focus {
    border: 1px solid ${({theme}) => theme.highlight};
  }
`;
