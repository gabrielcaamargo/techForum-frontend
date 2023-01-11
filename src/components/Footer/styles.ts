import styled from 'styled-components';

export const Container = styled.footer`
  padding: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${({theme}) => theme.gray.main};

  a {
    text-decoration: underline;
    color: ${({theme}) => theme.highlight};
    margin-left: 4px;
  }
`;
