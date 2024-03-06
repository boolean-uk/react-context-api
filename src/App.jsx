import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

const TweetContext = createContext();
const ThemeContext = createContext();

function getLocalSavedTheme() {
  const initTheme = localStorage.getItem("theme");

  return initTheme || "light";
}

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState(getLocalSavedTheme());

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <TweetContext.Provider value={{ user, tweets, setTweets }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className="container">
          <Header /> {/* Uses both */}
          <Tweets /> {/* Uses both */}
          <RightSide /> {/* Only uses theme */}
        </div>
      </ThemeContext.Provider>
    </TweetContext.Provider>
  );
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, TweetContext, ThemeContext };
