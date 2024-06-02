import BackgroundImageLight from '../../assets/backgroundImageLight.jpg';
import { defaultTheme } from '../../@types/styles';

export const LightTheme: defaultTheme = {
  title: 'Light',
  backgroundImage: BackgroundImageLight,
  colors: {
    background: '#FFFFFF',
    text: '#000000',
    shadow: '0 20px 13px rgba(0, 0, 0, 0.03)',

    backgroundSocialIcon: '#F3F6F6',
    linkedinLogo: '#0175B4',
    githubLogo: '#181515',
    whatsappLogo: '#23D366',
    instagramLogo: '#F04B5A',
    emailLogo: '#0363B8',

    backgroundRole: '#FFFFFF',
    textRole: '#7B7B7B',

    backgroundProfileInfos: '#F3F6F6',
    borderBottomInfo: '#E3E3E3',
    backgroundIconInfo: '#FFFFFF',
    textProfileInfoLabel: '#44566C',

    backgroundMenuItem: '#F3F6F6',
    textMenuItem: '#44566C',

    borderInput: '#F3F6F6',
    textLabelInput: '#44566C',
    borderInputFocused: '#E3E3E3',

    textLabelTextarea: '#44566C',
    borderTextarea: '#F3F6F6',
    borderTextareaFocused: '#E3E3E3',

    borderButtonSubmit: '#E3E3E3',
    textButton: '#7B7B7B',
  },
};
