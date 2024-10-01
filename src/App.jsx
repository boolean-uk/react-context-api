import { useEffect, useState, createContext } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

const Context = createContext();

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState("light");
  const setThemeWithStorage = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    setThemeWithStorage(localStorage.getItem("theme"));
  }, []);

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <Context.Provider
      value={{ tweets, setTweets, theme, setTheme: setThemeWithStorage, user }}
    >
      <div className="container">
        <Header />
        <Tweets />
        <RightSide />
      </div>
    </Context.Provider>
  );
}

export { App, Context };
