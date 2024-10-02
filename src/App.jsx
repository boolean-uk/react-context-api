import { useEffect, useState, createContext } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

const Context = createContext();

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  // const [theme, setTheme] = useState(getTheme);

  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem("theme");
    console.log("first set");
    return initialTheme ? initialTheme : "light";
  });

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);
  
  const getTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    console.log("theme", theme);
    getTheme();
  }, [theme]);



  return (
    <Context.Provider
      value={{ tweets, theme, user, setTweets, setTheme, toggleTheme }}
    >
      <div className="container">
        <Header />
        <Tweets />
        <RightSide />
      </div>
    </Context.Provider>
  );
}

export { App, Context };
