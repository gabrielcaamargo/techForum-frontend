import 'styled-components';

import darkTheme from '../assets/styles/themes/darkTheme';
import lightTheme from '../assets/styles/themes/lightTheme';

export type DarkTheme = typeof darkTheme;
export type LightTheme = typeof lightTheme;
declare module 'styled-components' {
  export interface DefaultTheme extends DarkTheme {}
  export interface DefaultTheme extends LightTheme {}
}
