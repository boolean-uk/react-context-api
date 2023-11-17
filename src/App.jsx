import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

const TweetContext = createContext();
const ThemeContext = createContext();

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const currentTheme = localStorage.getItem("theme")
  const [theme, setTheme] = useState(currentTheme)

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <TweetContext.Provider value={{ tweets, setTweets, user }}>
      <ThemeContext.Provider value={{ theme , setTheme}}>
        <div className="container">
          <Header  />
          <Tweets />
          <RightSide />
        </div>
      </ThemeContext.Provider>
    </TweetContext.Provider>
  );
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, TweetContext , ThemeContext};
