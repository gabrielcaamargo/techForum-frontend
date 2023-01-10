import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 72px;
  display: grid;
  max-width: 1440px;
  grid-template-columns: 304px auto;
  margin: 72px auto 0;
`;

export const ArticleContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TopUsers = styled.div`
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
