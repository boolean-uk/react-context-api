import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

export const MyContext = createContext();
export const MyTheme = createContext();

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <MyContext.Provider value={{ user, tweets, setTweets }}>
      <MyTheme.Provider value={{ theme, setTheme }}>
        <div className="container">
          <Header />
          <Tweets />
          <RightSide />
        </div>
      </MyTheme.Provider>
    </MyContext.Provider>
  );
}

export { App };
