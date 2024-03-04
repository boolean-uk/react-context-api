import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

const UserContext = createContext();
const ThemeContext = createContext();
const TweetContext = createContext();

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <div className="container">
      <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
        <UserContext.Provider value={{ user: user }}>
          <TweetContext.Provider
            value={{ tweets: tweets, setTweets: setTweets }}
          >
            <Tweets />
            <RightSide />
          </TweetContext.Provider>
          <Header />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file. wow
export { App, UserContext, ThemeContext, TweetContext };
