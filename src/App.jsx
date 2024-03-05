import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

const ThemeContext = createContext(null);
const TweetsContext = createContext(null);
const UserContext = createContext(null);

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <div className="container">
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <UserContext.Provider value={user}>
          <Header />
          <TweetsContext.Provider value={{ tweets, setTweets }}>
            <Tweets />
          </TweetsContext.Provider>
        </UserContext.Provider>
        <RightSide />
      </ThemeContext.Provider>
    </div>
  );
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, ThemeContext, UserContext, TweetsContext };
