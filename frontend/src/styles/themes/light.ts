import BackgroundImageLight from '../../assets/backgroundImageLight.jpg';
import { defaultTheme } from '../../@types/styles';

export const LightTheme: defaultTheme = {
  title: 'Light',
  backgroundImage: BackgroundImageLight,
  colors: {
    primaryBackground: '#FFFFFF',
    secondaryBackground: '#F3F6F6',

    primaryText: '#000000',
    secondaryText: '#44566C',
    tertiaryText: '#7B7B7B',

    primaryBorder: '#E3E3E3',
    secondaryBorder: '#F3F6F6',
    borderAlfa: 'rgba(0, 0, 0, 0.5)',

    shadow: '0 20px 13px rgba(0, 0, 0, 0.03)',
  },
  icons: {
    linkedinLogo: '#0175B4',
    githubLogo: '#181515',
    whatsappLogo: '#23D366',
    instagramLogo: '#F04B5A',
    emailLogo: '#0363B8',
  },
};
