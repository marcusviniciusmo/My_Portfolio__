import Switch from 'react-switch';
import { useContext } from 'react';
import { LightMode, DarkMode } from '@mui/icons-material';
import { ThemeContext } from '../../context/ThemeContext';
import { IconContainer } from './styles';

interface ThemeSwitcherProps {
  onColor: string;
  offColor: string;
  onHandleColor: string;
  offHandleColor: string;
  shadowLight: string;
  shadowDark: string;
  activeBoxShadow: string;
}

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const themeSwitcherColors: ThemeSwitcherProps = {
    onColor: '#3A3A3C',
    offColor: '#C0C0C0',
    onHandleColor: '#FFFFFF',
    offHandleColor: '#FFFFFF',
    shadowLight: '3px 3px 3px 3px rgba(0, 0, 0, 0.2)',
    shadowDark: '3px 3px 3px 3px rgba(255, 255, 255, 0.2)',
    activeBoxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.3)',
  };

  return (
    <Switch
      onChange={toggleTheme}
      checked={theme.title === 'Dark'}
      checkedIcon={false}
      uncheckedIcon={false}
      onColor={themeSwitcherColors.onColor}
      offColor={themeSwitcherColors.offColor}
      onHandleColor={themeSwitcherColors.onHandleColor}
      offHandleColor={themeSwitcherColors.offHandleColor}
      activeBoxShadow={themeSwitcherColors.activeBoxShadow}
      boxShadow={
        theme.title === 'Light'
          ? themeSwitcherColors.shadowLight
          : themeSwitcherColors.shadowDark
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
