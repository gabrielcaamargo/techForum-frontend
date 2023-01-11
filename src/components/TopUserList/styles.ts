import styled from 'styled-components';

interface UserProps {
  actualTheme: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({theme}) => theme.gray.main};
  width: 100%;
  border-radius: 8px;
  padding: 22px;
  height: 780px;

  h3 {
    font-size: 20px;
    font-weight: 700;
    font-family: 'Anybody', sans-serif;

    span {
      color: ${({theme}) => theme.highlight};
    }
  }
`;

export const UserList = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const User = styled.div<UserProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${({theme, actualTheme}) => actualTheme === 'dark' ? theme.gray.dark : theme.gray.lighter};
  padding: 8px;
  border-radius: 4px;

  p {
    font-weight: 700;
  }
`;
