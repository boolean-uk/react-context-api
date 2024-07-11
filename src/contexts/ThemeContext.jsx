// src/contexts/ThemeContext.jsx
import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const clearTheme = () => {
    localStorage.removeItem('theme');
    setTheme('light');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, clearTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
