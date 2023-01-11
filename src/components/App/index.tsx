import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useState } from 'react';

import GlobalStyles from '../../assets/styles/GlobalStyles';
import darkTheme from '../../assets/styles/themes/darkTheme';
import lightTheme from '../../assets/styles/themes/lightTheme';

import Header from '../Header';
import Router from '../../Router';

import { ArticleType } from '../../@types/ArticleType';
import { ArticleContext } from '../../contexts/ArticleContext';
import Footer from '../Footer';

export default function App() {
  const [theme, setTheme] = useState<string | null>(
    localStorage.getItem('theme')
  );
  const [articleList, setArticleTypeList] = useState<ArticleType[]>([]);

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
          <GlobalStyles />
          <Header />
          <ArticleContext.Provider value={{ articleList, setArticleTypeList }}>
            <Router />
          </ArticleContext.Provider>
          <Footer />
        </ThemeProvider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}
