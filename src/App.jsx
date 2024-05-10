import { useEffect, useState, createContext } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";
export const TweetContext = createContext();
export const ThemeContext = createContext();

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const loadedTheme = localStorage.getItem('theme')
  const [theme, setTheme] = useState(loadedTheme ||"light");
  

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <TweetContext.Provider value={{ tweets, setTweets, user }}>
        <div className="container">
          <Header />
          <Tweets />
          <RightSide />
        </div>
      </TweetContext.Provider>
    </ThemeContext.Provider>
  );
}

export { App };
