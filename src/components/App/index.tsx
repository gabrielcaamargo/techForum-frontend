import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
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

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [articleList, setArticleTypeList] = useState<ArticleType[]>([]);

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
          <ChakraProvider>
            <GlobalStyles />
            <Header />
            <ArticleContext.Provider value={{ articleList, setArticleTypeList }}>
              <Router />
            </ArticleContext.Provider>
          </ChakraProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}
