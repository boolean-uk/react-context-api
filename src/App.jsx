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
  const [theme, setTheme] = useState("light");

  useEffect(() => {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
          setTheme(storedTheme);
      }
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "white" : "black";
  }, [theme]);

  return (
    <>
        <div className="container">
            <MyContext.Provider value={{ user: user, theme: theme, setTheme: setTheme, tweets: tweets, setTweets: setTweets }}>
                <Header />
                <Tweets />
                <RightSide />
            </MyContext.Provider>
        </div>
    </>
  );
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, MyContext };
