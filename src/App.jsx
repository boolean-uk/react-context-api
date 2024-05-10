import { useEffect, useState, createContext, useContext } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

export const MyContext = createContext();
export const ThemeContext = createContext();

function App() {
  const loadedTheme = localStorage.getItem("theme");
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState(loadedTheme || "light");

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MyContext.Provider value={{ user, tweets, setTweets }}>
        <div className="container">
          <Header />
          <Tweets />
          <RightSide />
        </div>
      </MyContext.Provider>
    </ThemeContext.Provider>
  );
}

export { App };
