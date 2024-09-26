import React, { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

export const AppContext = createContext();

function App() {
  const [tweets, setTweets] = useState(
    JSON.parse(localStorage.getItem("tweets")) || defaultTweets
  );
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("tweets", JSON.stringify(tweets));
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme, tweets]);

  return (
    <AppContext.Provider value={{ user, tweets, setTweets }}>
      <div className="container">
        <Header theme={theme} setTheme={setTheme} />
        <Tweets theme={theme} />
        <RightSide theme={theme} />
      </div>
    </AppContext.Provider>
  );
}

export { App };
