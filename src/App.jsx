import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

export const TweetsContext = createContext();
export const ThemeContext = createContext();

function App() {
  const initialTheme = localStorage.getItem("theme") || "light";
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <div className="container">
      <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
        <TweetsContext.Provider
          value={{
            user: user,
            tweets: tweets,
            setTweets: setTweets,
          }}
        >
          <Header />
          <Tweets />
          <RightSide />
        </TweetsContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App };
