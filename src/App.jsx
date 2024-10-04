import { createContext, useEffect, useState } from "react";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";
import Header from "./components/Header";
import RightSide from "./components/RightSide";
import Tweets from "./components/Tweets";

const AppContext = createContext();

function App() {
  const getTheme = localStorage.getItem("theme");
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState(getTheme ? getTheme : "light");

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <AppContext.Provider value={{ tweets, theme, user, setTweets, setTheme }}>
      <div className="container">
        <Header />
        <Tweets />
        <RightSide />
      </div>
    </AppContext.Provider>
  );
}

export { App, AppContext };
