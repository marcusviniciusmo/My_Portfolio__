import 'styled-components';

export type defaultTheme = {
  title: string;
  backgroundImage: string;
  colors: {
    background: string;
    text: string;
    border: string;
    shadow: string;

    textFieldFormLabel: string;
    borderFieldForm: string;
    borderFieldFormFocused: string;

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

    backgroundMenuItem: string;
    textMenuItem: string;

    borderButtonSubmit: string;
    textButton: string;

    backgroundTableModalCertificate: string;
  };
};

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
