import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";
import TwitterContext from "./components/TwitterContext.jsx";

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="container">
      <TwitterContext.Provider
        value={{ user, tweets, setTweets, theme, setTheme }}
      >
        <Header />
        <Tweets />
        <RightSide />
      </TwitterContext.Provider>
    </div>
  );
}

export { App };
