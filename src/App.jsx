import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

const MyContext = createContext();
const ThemeContext = createContext();
const retrieveUserTheme = () => {
  const userPreferredTheme = localStorage.getItem("theme");
  return userPreferredTheme || "light";
};
function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState(retrieveUserTheme());

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <div className="container">
      <MyContext.Provider value={{ tweets, user, setTweets }}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Header />
          <Tweets />
          <RightSide />
        </ThemeContext.Provider>
      </MyContext.Provider>
    </div>
  );
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, MyContext, ThemeContext };
