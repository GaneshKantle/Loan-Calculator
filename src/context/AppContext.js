
// src/context/AppContext.js
import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');
  const [currency, setCurrency] = useState('USD');
  return (
    <AppContext.Provider value={{ themeMode, setThemeMode, currency, setCurrency }}>
      {children}
    </AppContext.Provider>
  );
};
