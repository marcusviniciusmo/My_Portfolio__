import { MenuItemType } from '../@types/Menu';

import {
  PermIdentity,
  Receipt,
  Devices,
  CardMembership,
  FormatQuote,
  AutoStories,
  Contacts,
} from '@mui/icons-material';

export const MenuItems: MenuItemType[] = [
  {
    id: '1',
    to: '/about',
    label: 'About',
    icon: PermIdentity,
  },
  {
    id: '2',
    to: '/resume',
    label: 'Resume',
    icon: Receipt,
  },
  {
    id: '3',
    to: '/projects',
    label: 'Projects',
    icon: Devices,
  },
  {
    id: '4',
    to: '/certificates',
    label: 'Certificates',
    icon: CardMembership,
  },
  {
    id: '5',
    to: '/testimonials',
    label: 'Testimonials',
    icon: FormatQuote,
  },
  {
    id: '6',
    to: '/blogs',
    label: 'Blogs',
    icon: AutoStories,
  },
  {
    id: '7',
    to: '/contact',
    label: 'Contact',
    icon: Contacts,
  },
];
