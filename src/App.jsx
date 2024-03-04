import { useEffect, useState, createContext } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

const applicationContext = createContext(); // This is the context we will use to pass data to the components

// This function is used to get the theme from local storage
function getTheme() {
  const theme = localStorage.getItem("theme");
  return theme ? theme : "light";
}

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState(getTheme); //

  // This effect will run every time the theme changes
  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <applicationContext.Provider
      value={{
        user: user,
        theme: theme,
        setTheme: setTheme,
        tweets: tweets,
        setTweets: setTweets,
      }}
    >
      <div className="container">
        <Header />
        <Tweets />
        <RightSide />
      </div>
    </applicationContext.Provider>
  );
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, applicationContext };
