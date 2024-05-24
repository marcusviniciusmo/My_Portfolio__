import { NavLink } from 'react-router-dom';
import { Home } from '@mui/icons-material';
import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <h1>HEADER COMPONENT</h1>

      <NavLink to="/">
        <Home className="headerIcon" />
      </NavLink>

      <button>Theme Switcher</button>
    </HeaderContainer>
  );
}
