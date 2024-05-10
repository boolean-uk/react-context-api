import { useEffect, useState, createContext } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

export const Data = createContext();
export const Theme = createContext();

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="container">
      <Data.Provider value={{ tweets, setTweets, user }}>
        <Theme.Provider value={{ theme, setTheme }}>
          <Header />
          <Tweets />
          <RightSide />
        </Theme.Provider>
      </Data.Provider>
    </div>
  );
}

export { App };
