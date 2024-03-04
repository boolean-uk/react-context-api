import { useEffect, useState, createContext } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

const AppContext = createContext();
const ThemeContext = createContext();

function App() {
  const storedThemeValue = localStorage.getItem("theme");
  const [tweets, setTweets] = useState(defaultTweets);

  const [theme, setTheme] = useState(
    storedThemeValue ? storedThemeValue : "light"
  );

  const toggleTheme = () => {
    const nextThemeValue = theme === "dark" ? "light" : "dark";
    setTheme(nextThemeValue);
    localStorage.setItem("theme", nextThemeValue);
  };

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <div className="container">
      <AppContext.Provider
        value={{ user: user, tweets: tweets, setTweets: setTweets }}
      >
        <ThemeContext.Provider
          value={{ theme: theme, toggleTheme: toggleTheme, setTheme: setTheme }}
        >
          <Header />
          <Tweets />
          <RightSide />
        </ThemeContext.Provider>
      </AppContext.Provider>
    </div>
  );
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, AppContext, ThemeContext };
