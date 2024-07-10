import React, { createContext, useState, useEffect } from "react";
import defaultTweets from "../assets/data/tweets";
import user from "../assets/data/user";

export const TweetsContext = createContext();
export const ThemeContext = createContext();
export const UserContext = createContext();

export function AppProvider({ children }) {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "white" : "black";
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const clearSettings = () => {
    localStorage.removeItem("theme");
    setTheme("light");
  };

  return (
    <TweetsContext.Provider value={{ tweets, setTweets }}>
      <ThemeContext.Provider value={{ theme, toggleTheme, clearSettings }}>
        <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
      </ThemeContext.Provider>
    </TweetsContext.Provider>
  );
}
