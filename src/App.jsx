import { useEffect, useState, createContext } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

const DefaultTheme = "light";
const TweetsContext = createContext();
const ThemeContext = createContext();
const UserContext = createContext();

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState(() => {
    let savedTheme = localStorage.getItem("theme");
    return savedTheme ?? DefaultTheme;
  });

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme == "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="container">
      <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
        <UserContext.Provider value={{ user }}>
          <TweetsContext.Provider value={{ tweets, setTweets }}>
            <Header />
            <Tweets />
            <RightSide />
          </TweetsContext.Provider>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export { App, TweetsContext, ThemeContext, UserContext, DefaultTheme };
