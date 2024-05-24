import Switch from 'react-switch';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Switch onChange={toggleTheme} checked={theme.title === 'Dark'} />
    </>
  );
}
