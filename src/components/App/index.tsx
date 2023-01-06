import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/GlobalStyles';
import Header from '../Header';

import { ChakraProvider } from '@chakra-ui/react';

import darkTheme from '../../assets/styles/themes/darkTheme';

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <ChakraProvider>
        <GlobalStyles />
        <Header />
      </ChakraProvider>
    </ThemeProvider>
  );
}
