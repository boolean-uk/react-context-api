import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem("theme");
    return initialTheme ? initialTheme : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "light") {
      document.body.style.backgroundColor = "white";
    } else if (theme === "dark") {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "white";
      localStorage.removeItem("theme")
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
