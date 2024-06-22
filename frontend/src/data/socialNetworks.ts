import {
  LinkedIn,
  GitHub,
  WhatsApp,
  Instagram,
  Email,
} from '@mui/icons-material';

import { SocialNetworkType } from '../@types/SocialNetworks';

export const SocialNetworkList: SocialNetworkType[] = [
  {
    id: '1',
    className: 'linkedinLogo',
    title: 'Linkedin',
    link: 'https://www.linkedin.com/in/marcus-viniciusmo/',
    icon: LinkedIn,
  },
  {
    id: '2',
    className: 'githubLogo',
    title: 'GitHub',
    link: 'https://github.com/marcusviniciusmo',
    icon: GitHub,
  },
  {
    id: '3',
    className: 'whatsappLogo',
    title: 'WhatsApp',
    link: 'https://wa.me/3530832084998',
    icon: WhatsApp,
  },
  {
    id: '4',
    className: 'instagramLogo',
    title: 'Instagram',
    link: 'https://www.instagram.com/projit.world/',
    icon: Instagram,
  },
  {
    id: '5',
    className: 'emailLogo',
    title: 'Email',
    link: 'mailto:marcus.viniciusmo@hotmail.com',
    icon: Email,
  },
];
