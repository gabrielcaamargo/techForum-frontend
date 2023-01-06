import { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/GlobalStyles';
import Header from '../Header';

import { ChakraProvider } from '@chakra-ui/react';

import darkTheme from '../../assets/styles/themes/darkTheme';
import lightTheme from '../../assets/styles/themes/lightTheme';

import { ThemeContext } from '../../contexts/ThemeContext';

export default function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <ChakraProvider>
          <GlobalStyles />
          <Header />
        </ChakraProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
