import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 72px;
  display: grid;
  max-width: 1440px;
  grid-template-columns: 304px auto;
  margin: 72px auto;

  @media screen and (max-width: 1386px) {
    grid-template-columns: 280px auto;
    width: 90vw;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 90vw;
    width: 100%;
  }
`;

export const ArticleContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-top: 48px;
  }
`;


