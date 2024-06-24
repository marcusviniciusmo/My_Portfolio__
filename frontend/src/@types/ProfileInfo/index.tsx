import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface ProfileInfoType {
  id: string;
  className: string;
  label: string;
  link?: string;
  data: string;
  icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
    muiName: string;
  };
}

export interface ProfileInfoDataProps {
  $link: string;
}
