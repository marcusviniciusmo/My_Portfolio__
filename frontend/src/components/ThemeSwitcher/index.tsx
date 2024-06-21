import { useContext } from 'react';
import { LightMode, DarkMode } from '@mui/icons-material';

import { ThemeContext } from '../../context/ThemeContext';

import { ThemeSwitcherContainer } from './styles';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeSwitcherContainer onClick={toggleTheme}>
      {theme.title === 'Light' ? (
        <DarkMode fontSize="large" />
      ) : (
        <LightMode fontSize="large" />
      )}
    </ThemeSwitcherContainer>
  );
}
