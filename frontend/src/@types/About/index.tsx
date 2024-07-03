import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface ExpertiseType {
  id: string;
  title: string;
  text: string;
  iconClassName: string;
  icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
    muiName: string;
  };
}

export interface CardProps {
  $borderColor: string;
}
