import { NavLink } from 'react-router-dom';
import { Home } from '@mui/icons-material';

import { ThemeSwitcher } from '../ThemeSwitcher';

import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <Home className="homeIcon" titleAccess="Home" />
      </NavLink>

      <ThemeSwitcher />
    </HeaderContainer>
  );
}
