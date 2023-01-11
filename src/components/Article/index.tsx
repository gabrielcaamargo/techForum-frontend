import { useContext } from 'react';
import { ArticleContext } from '../../contexts/ArticleContext';
import { ArticleType } from '../../@types/ArticleType';
import { Container, ArticleLikes, ArticleHeader, ArticleContainer } from './styles';

import { CaretCircleUp } from 'phosphor-react';
import { ThemeContext } from '../../contexts/ThemeContext';


export default function Article({name, content, category, id}: ArticleType) {
  const { articleList } = useContext(ArticleContext);
  const { theme } = useContext(ThemeContext);

  return (
    <Container>
      <ArticleLikes>
        <button>
          <CaretCircleUp size={32} color={theme === 'dark' ? '#F5F5F5' : '#0A0A0A'}/>
        </button>
        <strong>25</strong>
      </ArticleLikes>

      <ArticleContainer>
        <ArticleHeader>
          <strong>Usando o useReducer</strong>
        </ArticleHeader>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consectetur ab unde rerum eius repellendus iste architecto sapiente a earum magnam cupiditate autem, fuga, id aliquid debitis cumque labore. Fuga nisi, autem, similique assumenda minima architecto explicabo inventore sapiente asperiores nulla dolorem consequuntur quidem provident!</p>
      </ArticleContainer>
    </Container>
  );
}
