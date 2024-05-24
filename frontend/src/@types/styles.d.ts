import 'styled-components';

export type defaultTheme = {
  title: string;
};

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
