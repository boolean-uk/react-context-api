import { useEffect, useState, createContext } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

export const TweetContext = createContext();
export const UserSettingContext = createContext();

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  function getTheme() {
    if (localStorage.getItem("appTheme") !== null) {
      return localStorage.getItem("appTheme");
    } else {
      return "light";
    }
  }

  return (
    <TweetContext.Provider
      value={{
        user: user,
        tweets: tweets,
        setTweets: setTweets,
      }}
    >
      <UserSettingContext.Provider
        value={{
          theme: theme,
          setTheme: setTheme,
        }}
      >
        <div className="container">
          <Header />
          <Tweets />
          <RightSide />
        </div>
      </UserSettingContext.Provider>
    </TweetContext.Provider>
  );
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App };
