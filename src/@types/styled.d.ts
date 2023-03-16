import { defultTheme } from './../global';
import 'styled-components'

type ThemeType = typeof defultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}