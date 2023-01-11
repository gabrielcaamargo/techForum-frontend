import { useContext } from 'react';
// import { ArticleContext } from '../../contexts/ArticleContext';
import { ArticleType } from '../../@types/ArticleType';
import { Container, ArticleLikes, ArticleHeader, ArticleContainer, ArticleFooter, Category } from './styles';

import { CaretCircleUp } from 'phosphor-react';
import { ThemeContext } from '../../contexts/ThemeContext';


export default function Article({name, content, category, categoryColor, likes, author, isLiked}: ArticleType) {
  // const { articleList } = useContext(ArticleContext);
  const { theme } = useContext(ThemeContext);

  return (
    <Container>
      <ArticleLikes>
        <button>
          <CaretCircleUp size={32} color={theme === 'dark' ? '#F5F5F5' : '#0A0A0A'} weight={isLiked ? 'fill' : 'regular'} />
        </button>
        <strong>{likes}</strong>
      </ArticleLikes>

      <ArticleContainer>
        <ArticleHeader>
          <strong>{name}</strong>
          <Category categoryColor={categoryColor}>
            <small>{category}</small>
          </Category>
        </ArticleHeader>

        <p>{content}</p>

        <ArticleFooter>
          <strong>Author:</strong>
          <small>{author}</small>
        </ArticleFooter>
      </ArticleContainer>
    </Container>
  );
}
