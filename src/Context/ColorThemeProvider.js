
import React from 'react';
import {mainColors} from '../Theme/Color'
export const ColorThemeContext = React.createContext();

export function ColorThemeProvider({ children }) {
    const [colors, setColors] = React.useState(mainColors.lightTheme) //setting light theme as default
    const value = React.useMemo(
    () => ({
        colors,
        setColors,
    }),
    [colors, setColors],
  );

  return (
    <ColorThemeContext.Provider value={value}>{children}</ColorThemeContext.Provider>
  );
}