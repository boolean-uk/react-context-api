import { useEffect, useState, createContext } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

const MyContext = createContext();
const ThemeContext = createContext();
function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, []);

  return (
    <div className="container">
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <MyContext.Provider value={{ user, tweets, setTweets }}>
          <Header />
          <Tweets />
          <RightSide />
        </MyContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, MyContext, ThemeContext };
