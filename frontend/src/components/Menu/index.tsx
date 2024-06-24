import { NavLink } from 'react-router-dom';

import { MenuItems } from '../../data/menu';
import { MenuItemType } from '../../@types/Menu';

import { MenuContainer, MenuItemsList, MenuItem } from './styles';
import { useEffect, useState } from 'react';

export function Menu() {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);

  useEffect(() => {
    setMenuItems(MenuItems);
  }, []);

  return (
    <MenuContainer>
      <MenuItemsList>
        {menuItems.map((item) => {
          return (
            <NavLink key={item.id} to={item.to}>
              <MenuItem>
                <item.icon fontSize="large" />
                {item.label}
              </MenuItem>
            </NavLink>
          );
        })}
      </MenuItemsList>
    </MenuContainer>
  );
}
