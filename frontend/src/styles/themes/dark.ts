import BackgroundImageDark from '../../assets/backgroundImageDark.jpg';
import { defaultTheme } from '../../@types/styles';

export const DarkTheme: defaultTheme = {
  title: 'Dark',
  backgroundImage: BackgroundImageDark,
  colors: {
    primaryBackground: '#111111',
    secondaryBackground: '#212425',

    primaryText: '#FFFFFF',
    secondaryText: '#A6A6A6',
    tertiaryText: '#A6A6A6',

    primaryBorder: '#3D3A3A',
    secondaryBorder: '#212425',
    borderAlfa: 'rgba(255, 255, 255, 0.5)',

    shadow: '0 20px 13px rgba(255, 255, 255, 0.1)',
  },
  icons: {
    linkedinLogo: '#E9E9EA',
    githubLogo: '#FFFFFF',
    whatsappLogo: '#B5FFAA',
    instagramLogo: '#E1146C',
    emailLogo: '#2EDCFD',

    phoneIcon: '#E93B81',
    emailIcon: '#6AB5B9',
    locationIcon: '#FD7590',
    birhtdayIcon: '#C17CEB',
  },
};
