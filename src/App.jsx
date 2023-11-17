import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

const UserContex = createContext();
const TweetsContext = createContext();
const ThemeContext = createContext();

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
      <UserContex.Provider value={{ user }}>
        <TweetsContext.Provider value={{ tweets, setTweets }}>
          <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className="app">
              <Header /> 
              <Tweets />
              <RightSide />
            </div>
          </ThemeContext.Provider>
        </TweetsContext.Provider>
      </UserContex.Provider>
    </div>
  );
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, UserContex, TweetsContext, ThemeContext };
