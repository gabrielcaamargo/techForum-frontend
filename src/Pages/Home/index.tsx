import Article from '../../components/Article';
import { ArticleType } from '../../@types/ArticleType';
import { Container } from './styles';

const ArticleList: ArticleType[] = [
  {
    name: 'Artigo 1',
    content: 'Conteúdo',
    id: 2,
    category: 'Typescript'
  },
  {
    name: 'Artigo 2',
    content: 'Conteúdo',
    id: 1,
    category: 'Typescript'
  },
  {
    name: 'Artigo 3',
    content: 'Conteúdo',
    id: 3,
    category: 'Javascript'
  },
  {
    name: 'Artigo 4',
    content: 'Conteúdo',
    id: 4,
    category: 'Node'
  },
  {
    name: 'Artigo 5',
    content: 'Conteúdo',
    id: 5,
    category: 'React'
  },
  {
    name: 'Artigo 6',
    content: 'Conteúdo',
    id: 6,
    category: 'React Native'
  },
  {
    name: 'Artigo 7',
    content: 'Conteúdo',
    id: 7,
    category: 'Express'
  },
  {
    name: 'Artigo 8',
    content: 'Conteúdo',
    id: 8,
    category: 'React'
  },
];

export default function Home() {
  return (
    <Container>
      {ArticleList.map(article => (
        <Article
          key={article.id}
          name={article.name}
          content={article.content}
          category={article.category}
          id={article.id}
        />
      ))}
    </Container>
  );
}
