import { useEffect, useState, createContext } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";
export const LoginContext = createContext();
export const ThemeContext = createContext();

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState(() => {
    const value = localStorage.getItem("theme");
    return value || "light";
  });

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <div className="container">
      <LoginContext.Provider
        value={{ user: user, tweets: tweets, setTweets: setTweets }}
      >
        <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
          <Header />
          <Tweets />
          <RightSide />
        </ThemeContext.Provider>
      </LoginContext.Provider>
    </div>
  );
}

export { App };
