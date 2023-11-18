import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

// 1. Importing createContext
import { createContext } from "react";

// 2. Create a new context
const AppContext = createContext();
const ThemeContext = createContext();

function App() {
  const storedTheme = localStorage.getItem("TwitterTheme");
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState(storedTheme || "light");

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    // 3. Wrap in context provider - Child components wrapped in AppContext
    <AppContext.Provider value={{ tweets, setTweets, user }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className="container">
          <Header />
          <Tweets />
          <RightSide />
        </div>
      </ThemeContext.Provider>
    </AppContext.Provider>
  );
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, AppContext, ThemeContext };
