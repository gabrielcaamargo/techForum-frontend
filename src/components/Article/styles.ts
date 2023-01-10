import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  display: grid;
  grid-template-columns: 48px auto;

  & + & {
    margin-top: 24px;
  }
`;

export const ArticleLikes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin-top: 22px;
  }
`;

export const ArticleContainer = styled.div`
  background-color: transparent;
  border: 1px solid ${({theme}) => theme.gray.main};
  padding: 22px;
  border-radius: 8px;
`;

export const ArticleHeader = styled.header`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;

  strong {
    font-size: 24px;
  }
`;

export const ArticleFooter = styled.footer`
  margin-top: 24px;
  display: flex;
  gap: 16px;

  small {
    font-size: 14px;
    display: flex;
    align-items: center;
    &:last-of-type {
      color: ${({theme}) => theme.highlight};
      font-weight: bold;

      &::before {
        display: inline-block;
        content: '';
        width: 5px;
        height: 5px;
        background-color: ${({theme}) => theme.textColor};
        border-radius: 50%;
        margin-right: 16px;
      }
    }
  }
`;
