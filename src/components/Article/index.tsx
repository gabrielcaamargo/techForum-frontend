import { useContext } from 'react';
import { ArticleContext } from '../../contexts/ArticleContext';
import { ArticleType } from '../../@types/ArticleType';

export default function Article({name, content, category, id}: ArticleType) {
  const {articleList} = useContext(ArticleContext);

  return (
    <h1>Article</h1>
  );
}
