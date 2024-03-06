import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";
import { createContext } from "react";
const Context = createContext();
const ThemeContext = createContext();
function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="container">
        <Context.Provider value={{ tweets, setTweets, user }}>
          <Header />
          <Tweets />
        </Context.Provider>
        <RightSide />
      </div>
    </ThemeContext.Provider>
  );
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, Context, ThemeContext };
