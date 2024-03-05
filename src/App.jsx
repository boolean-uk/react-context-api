import { useEffect, useState, createContext } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";
export const UserTweetContext = createContext();

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <UserTweetContext.Provider value={{ tweets: tweets, setTweets: setTweets, user: user}}>
      value={}
      <div className="container">
        <Header theme={theme} setTheme={setTheme} />
        <Tweets
          theme={theme}
        />
        <RightSide theme={theme} />
      </div>
    </UserTweetContext.Provider>
  );
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App };
