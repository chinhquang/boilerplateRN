import React from 'react';
export const LanguageContext = React.createContext();
import {mainLanguage} from '../Theme/Language'

export function LanguageThemeProvider({ children }) {
    const [lang, setLang] = React.useState(mainLanguage.vie) //setting eng lang as default
    const value = React.useMemo(
        () => ({
            lang,
            setLang,
        }),
        [lang, setLang],
    );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

