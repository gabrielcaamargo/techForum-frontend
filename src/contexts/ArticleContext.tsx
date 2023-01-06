import { createContext } from 'react';
import { ArticleType } from '../@types/ArticleType';

interface ArticleInterface {
  articleList: ArticleType[];
  setArticleTypeList: (setState: ArticleType[]) => void;
}

export const ArticleContext = createContext<ArticleInterface | null>(null) as React.Context<ArticleInterface>;
