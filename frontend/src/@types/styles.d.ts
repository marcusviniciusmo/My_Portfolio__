import 'styled-components';

export type defaultTheme = {
  title: string;
  backgroundImage: string;
  colors: {
    primaryBackground: string;
    secondaryBackground: string;

    primaryText: string;
    secondaryText: string;
    tertiaryText: string;

    primaryBorder: string;
    secondaryBorder: string;
    borderAlfa: string;

    shadow: string;
  };
  icons: {
    linkedinLogo: string;
    githubLogo: string;
    whatsappLogo: string;
    instagramLogo: string;
    emailLogo: string;
  };
};

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
