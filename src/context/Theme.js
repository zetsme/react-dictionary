import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { deepOrange, deepPurple, lightBlue, orange } from '@material-ui/core/colors';
import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react';

const ThemeContext = createContext();

export const Theme = ({ children }) => {
  const [themeState, setThemeState] = useState(false);
  const palletType = themeState ? 'dark' : 'light';
  const mainPrimaryColor = themeState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = themeState ? deepOrange[200] : deepPurple[500];
  const themeLabel = `${themeState ? 'Dark' : 'Light'} mode`;

  const handleThemeChange = () => setThemeState((prev) => !prev);

  const darkTheme = createTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  });
  return (
    <ThemeContext.Provider value={[themeState, themeLabel, handleThemeChange]}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
