import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

const Something = createContext();
const themeContext = createContext();

const getTheme = () => {
  const currentTheme = localStorage.getItem("theme");
  return currentTheme || "light";
};
function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <Something.Provider value={{ user, theme, setTheme, tweets, setTweets }}>
      <themeContext.Provider value={{ theme, setTheme }}>
        <div className="container">
          <Header />
          <Tweets />
          <RightSide />
        </div>
      </themeContext.Provider>
    </Something.Provider>
  );
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, Something, themeContext };
