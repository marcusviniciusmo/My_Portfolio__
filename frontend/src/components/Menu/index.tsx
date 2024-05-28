import {
  PermIdentity,
  Receipt,
  Devices,
  CardMembership,
  FormatQuote,
  AutoStories,
  Contacts,
} from '@mui/icons-material';
import { MenuContainer, MenuItemsList, MenuItem } from './styles';
import { NavLink } from 'react-router-dom';

export function Menu() {
  return (
    <MenuContainer>
      <MenuItemsList>
        <NavLink to="/about">
          <MenuItem className="gradientHover gradientHoverToRight">
            <PermIdentity fontSize="large" />
            About
          </MenuItem>
        </NavLink>

        <NavLink to="/resume">
          <MenuItem className="gradientHover gradientHoverToRight">
            <Receipt fontSize="large" />
            Resume
          </MenuItem>
        </NavLink>

        <NavLink to="/projects">
          <MenuItem className="gradientHover gradientHoverToRight">
            <Devices fontSize="large" />
            Projects
          </MenuItem>
        </NavLink>

        <NavLink to="/certificates">
          <MenuItem className="gradientHover gradientHoverToRight">
            <CardMembership fontSize="large" />
            Certificates
          </MenuItem>
        </NavLink>

        <NavLink to="/testimonials">
          <MenuItem className="gradientHover gradientHoverToRight">
            <FormatQuote fontSize="large" />
            Testimonials
          </MenuItem>
        </NavLink>

        <NavLink to="/blogs">
          <MenuItem className="gradientHover gradientHoverToRight">
            <AutoStories fontSize="large" />
            Blogs
          </MenuItem>
        </NavLink>

        <NavLink to="/contact">
          <MenuItem className="gradientHover gradientHoverToRight">
            <Contacts fontSize="large" />
            Contact
          </MenuItem>
        </NavLink>
      </MenuItemsList>
    </MenuContainer>
  );
}
