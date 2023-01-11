import Article from '../../components/Article';
import { ArticleType } from '../../@types/ArticleType';
import { ArticleContainer, Container } from './styles';
import { postsMock } from '../../mocks/posts';
import TopUserList from '../../components/TopUserList';

function getCategoryColor(categoryColor: string) {
  let color;

  switch(categoryColor) {
  case 'React':
    color = '#0FA3B1';
    break;

  case 'Node':
    color = '#17C136';
    break;

  case 'Javascript':
    color = '#DCC84B';
    break;

  case 'Typescript':
    color = '#286CC6';
    break;

  case 'React Native':
    color = '#0D16CB';
    break;
  }

  return color;
}

export default function Home() {
  return (
    <Container>
      <TopUserList />

      <ArticleContainer>
        {postsMock.map((article: ArticleType) => (
          <Article
            key={article.id}
            name={article.name}
            content={article.content}
            category={article.category}
            likes={article.likes}
            categoryColor={() => getCategoryColor(article.category)}
            author={article.author}
            isLiked={article.isLiked}
            id={article.id}
          />
        ))}
      </ArticleContainer>
    </Container>
  );
}
