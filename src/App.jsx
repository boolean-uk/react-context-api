import { useEffect, useState, createContext } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

const TweetContents = createContext();
const ThemeContext = createContext();
function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  //if "theme" is undefined set theme to light

  localStorage.setItem("theme", theme);

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <TweetContents.Provider value={{ tweets, setTweets, user }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className="container">
          <Header />
          <Tweets />
          <RightSide />
        </div>
      </ThemeContext.Provider>
    </TweetContents.Provider>
  );
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, TweetContents, ThemeContext };
