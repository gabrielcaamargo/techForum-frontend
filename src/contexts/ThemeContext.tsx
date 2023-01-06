import { createContext } from 'react';

interface ThemeContextInterface {
  theme: string;
  setTheme: (setState: 'dark' | 'light') => void;
}

export const ThemeContext = createContext<ThemeContextInterface | null>(null) as React.Context<ThemeContextInterface>;
