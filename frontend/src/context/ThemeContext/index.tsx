import { ReactNode, createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from '../../styles/themes/light';
import { DarkTheme } from '../../styles/themes/dark';

interface ThemeContextType {
  theme: typeof LightTheme;
  toggleTheme: () => void;
}

interface ThemeContextProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({ children }: ThemeContextProps) {
  const [theme, setTheme] = useState(LightTheme);

  function toggleTheme() {
    setTheme((prevTheme) =>
      prevTheme.title === 'Light' ? DarkTheme : LightTheme,
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
