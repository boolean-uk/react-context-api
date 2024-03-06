import { useEffect, useState, createContext } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

const TweetContext = createContext();
const ThemeContext = createContext();

const INITIAL_THEME = {
  theme: "light",
};

function App() {
  const loadThemeFromLocalStorage = () => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || INITIAL_THEME.theme;
  };

  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState(loadThemeFromLocalStorage());

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <div className="container">
      <TweetContext.Provider
        value={{
          TweetConstValue: "someValue",
          tweets: tweets,
          setTweets: setTweets,
          user: user,
        }}
      >
        <ThemeContext.Provider
          value={{
            ThemeConstValue: "someValue",
            theme: theme,
            setTheme: setTheme,
          }}
        >
          <Header />
          <Tweets />
          <RightSide />
        </ThemeContext.Provider>
      </TweetContext.Provider>
    </div>
  );
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, TweetContext, ThemeContext };
