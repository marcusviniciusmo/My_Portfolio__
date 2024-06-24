import { ProfileInfoType } from '../@types/ProfileInfo';
import {
  Smartphone,
  Email,
  LocationOn,
  CalendarMonth,
} from '@mui/icons-material';

export const ProfileInfoData: ProfileInfoType[] = [
  {
    id: '1',
    className: 'smartphoneIcon',
    label: 'Phone',
    link: 'https://wa.me/3530832084998',
    data: '+353 083 208 4998',
    icon: Smartphone,
  },
  {
    id: '2',
    className: 'emailIcon',
    label: 'Email',
    link: 'mailto:marcus.viniciusmo@hotmail.com',
    data: 'marcus.viniciusmo@hotmail.com',
    icon: Email,
  },
  {
    id: '3',
    className: 'locationIcon',
    label: 'Location',
    data: 'Dublin, Ireland',
    icon: LocationOn,
  },
  {
    id: '4',
    className: 'birthdayIcon',
    label: 'Birthday',
    data: 'December 28, 1984',
    icon: CalendarMonth,
  },
];
