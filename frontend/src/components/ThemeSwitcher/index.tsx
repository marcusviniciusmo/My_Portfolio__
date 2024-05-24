import Switch from 'react-switch';
import { useContext } from 'react';
import { LightMode, DarkMode } from '@mui/icons-material';
import { ThemeContext } from '../../context/ThemeContext';
import { IconContainer } from './styles';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Switch
      onChange={toggleTheme}
      checked={theme.title === 'Dark'}
      checkedIcon={false}
      uncheckedIcon={false}
      onColor="#3A3A3C"
      offColor="#C0C0C0"
      onHandleColor="#FFFFFF"
      offHandleColor="#FFFFFF"
      activeBoxShadow="3px 3px 3px 3px rgba(0, 0, 0, 0.3)"
      boxShadow={
        theme.title === 'Light'
          ? '3px 3px 3px 3px rgba(0, 0, 0, 0.2)'
          : '3px 3px 3px 3px rgba(255, 255, 255, 0.2)'
      }
      checkedHandleIcon={
        <IconContainer>
          <LightMode />
        </IconContainer>
      }
      uncheckedHandleIcon={
        <IconContainer>
          <DarkMode />
        </IconContainer>
      }
    />
  );
}
