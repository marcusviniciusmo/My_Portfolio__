import 'styled-components';

export type defaultTheme = {
  title: string;
  backgroundImage: string;
  colors: {
    background: string;
    text: string;
    shadow: string;

    backgroundSocialIcon: string;
    linkedinLogo: string;
    githubLogo: string;
    whatsappLogo: string;
    instagramLogo: string;
    emailLogo: string;

    backgroundRole: string;
    textRole: string;

    backgroundProfileInfos: string;
    borderBottomInfo: string;
    backgroundIconInfo: string;
    textProfileInfoLabel: string;
  };
};

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
