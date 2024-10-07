import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";
import { TwitterAppContext } from "./context.js";

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const contextValues = {
    tweets,
    setTweets,
    theme,
    setTheme,
    user,
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <div className="container">
      <TwitterAppContext.Provider value={contextValues}>
        <Header />
        <Tweets />
        <RightSide />
      </TwitterAppContext.Provider>
    </div>
  );
}

export { App };
