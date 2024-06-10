import BackgroundImageDark from '../../assets/backgroundImageDark.jpg';
import { defaultTheme } from '../../@types/styles';

export const DarkTheme: defaultTheme = {
  title: 'Dark',
  backgroundImage: BackgroundImageDark,
  colors: {
    background: '#111111',
    text: '#FFFFFF',
    shadow: '0 20px 13px rgba(255, 255, 255, 0.1)',

    backgroundSocialIcon: '#212425',
    linkedinLogo: '#E9E9EA',
    githubLogo: '#FFFFFF',
    whatsappLogo: '#B5FFAA',
    instagramLogo: '#E1146C',
    emailLogo: '#2EDCFD',

    backgroundRole: '#1D1D1D',
    textRole: '#A6A6A6',

    backgroundProfileInfos: '#1D1D1D',
    borderBottomInfo: '#3D3A3A',
    backgroundIconInfo: '#000000',
    textProfileInfoLabel: '#A6A6A6',

    backgroundMenuItem: '#212325',
    textMenuItem: '#A6A6A6',

    borderInput: '#212425',
    textLabelInput: '#A6A6A6',
    borderInputFocused: '#3D3A3A',

    textLabelTextarea: '#A6A6A6',
    borderTextarea: '#212425',
    borderTextareaFocused: '#3D3A3A',

    borderButtonSubmit: '#3D3A3A',
    textButton: '#A6A6A6',

    backgroundTableModalCertificate: '#212325',
  },
};
