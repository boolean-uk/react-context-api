import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

const userContext = createContext();
const tweetsContext = createContext();
const themeContext = createContext();

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState("");

  const fetchTheme = () => {
    let theme = localStorage.getItem("theme");
    if (!theme) theme = "light";
    setTheme(theme);
  };

  useEffect(() => {
    fetchTheme();
  }, []);

  useEffect(() => {
    theme === "light" ? (document.body.style.backgroundColor = "white") : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <userContext.Provider value={{ user }}>
        <div className="container">
          <Header />
          <tweetsContext.Provider value={{ tweets, setTweets }}>
            <Tweets />
          </tweetsContext.Provider>
          <RightSide />
        </div>
      </userContext.Provider>
    </themeContext.Provider>
  );
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, userContext, tweetsContext, themeContext };
