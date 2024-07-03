import {
  Translate,
  Code,
  MobileFriendly,
  Storage,
  ViewKanban,
  ThumbUpAltOutlined,
} from '@mui/icons-material';

import { ExpertiseType } from '../@types/About';

export const Expertises: ExpertiseType[] = [
  {
    id: '1',
    title: 'Languages I speak',
    text: `React, React Native, TypeScript, JavaScript, HTML, CSS, C#, SQL
      Server, Git`,
    iconClassName: 'iconCard languagesIcon',
    icon: Translate,
  },
  {
    id: '2',
    title: 'Web Development',
    text: `Creating responsive and dynamic websites using the latest
      technologies.`,
    iconClassName: 'iconCard webDevelopmentIcon',
    icon: Code,
  },
  {
    id: '3',
    title: 'App Development',
    text: `Developing intuitive and efficient mobile applications for Android
      and iOS.`,
    iconClassName: 'iconCard appDevelopmentIcon',
    icon: MobileFriendly,
  },
  {
    id: '4',
    title: 'Backend & Storage',
    text: `Implementing robust servers and secure, scalable storage solutions.`,
    iconClassName: 'iconCard storageIcon',
    icon: Storage,
  },
  {
    id: '5',
    title: 'Agile Methodologies',
    text: `Utilizing agile methodologies to ensure quick and high-quality
      deliveries.`,
    iconClassName: 'iconCard agileIcon',
    icon: ViewKanban,
  },
  {
    id: '6',
    title: 'Good Practices',
    text: `Adopting good programming practices to ensure clean, efficient, and
      sustainable code.`,
    iconClassName: 'iconCard goodPracticesIcon',
    icon: ThumbUpAltOutlined,
  },
];
