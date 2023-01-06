import { useContext } from 'react';
import { ArticleContext } from '../../contexts/ArticleContext';
import { ArticleType } from '../../@types/ArticleType';
import { Container, ArticleLikes, ArticleHeader, ArticleContainer, ArticleFooter } from './styles';

import { Badge } from '@chakra-ui/react';
import { BiUpArrow } from 'react-icons/bi';

export default function Article({name, content, category, id}: ArticleType) {
  const {articleList} = useContext(ArticleContext);

  return (
    <Container>
      <ArticleLikes>
        <button>
          <BiUpArrow color='#FFF' size={32} fontWeight="bold"/>
        </button>
      </ArticleLikes>

      <ArticleContainer>
        <ArticleHeader>
          <strong>Usando o useReducer</strong>
          <Badge colorScheme='cyan'>React</Badge>
        </ArticleHeader>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consectetur ab unde rerum eius repellendus iste architecto sapiente a earum magnam cupiditate autem, fuga, id aliquid debitis cumque labore. Fuga nisi, autem, similique assumenda minima architecto explicabo inventore sapiente asperiores nulla dolorem consequuntur quidem provident!</p>

        <ArticleFooter>
          <small>Gabriel Camargo - 06/01/2022</small>
          <small>Follow</small>
        </ArticleFooter>
      </ArticleContainer>
    </Container>
  );
}
