import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

export const dataContext = createContext();
export const Theme = createContext();

function loadThemeFromStorage() {
  const loadedTheme = localStorage.getItem("AppTheme");
  console.log(loadedTheme);
  if (!loadedTheme) return "light";
  return loadedTheme;
}

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState(loadThemeFromStorage());

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <div className="container">
      <Theme.Provider value={{ theme: theme, setTheme: setTheme }}>
        <dataContext.Provider
          value={{ user: user, tweets: tweets, setTweets: setTweets }}
        >
          <Header />
          <Tweets />
        </dataContext.Provider>
        <RightSide />
      </Theme.Provider>
    </div>
  );
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App };
