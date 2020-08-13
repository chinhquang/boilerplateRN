/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {LanguageThemeProvider} from './Context/LanguageThemeProvider'
import {ColorThemeProvider} from './Context/ColorThemeProvider'

const App: () => React$Node = () => {
  return (
    <>
      <ColorThemeProvider>
      <LanguageThemeProvider>
        {/* <RootScreen/> */}
      </LanguageThemeProvider>
      </ColorThemeProvider>
    </>
  );
};



export default App;
