import { useEffect, useState, createContext, useMemo } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";
const ThemeContext = createContext();
const UserTweetContext = createContext();
function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } 
      theme === "light"
        ? (document.body.style.backgroundColor = "white")
        : (document.body.style.backgroundColor = "black");
    
  }, [theme]);

  // useMemo for performance optimization
  const themeContextValue = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme, setTheme]
  );

  const userTweetContextValue = useMemo(
    () => ({
      user: user,
      tweets: tweets,
      setTweets: setTweets,
    }),
    [user, tweets, setTweets]
  );

  return (
    <div className="container">
      <ThemeContext.Provider value={themeContextValue}>
        <UserTweetContext.Provider value={userTweetContextValue}>
          <Header />
          <Tweets />
          <RightSide />
        </UserTweetContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}
export { App, ThemeContext, UserTweetContext };
