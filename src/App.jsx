import { useEffect, useState, createContext } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";
export const UserTweetContext = createContext();
export const ColorTheme = createContext()

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState(()=>{
    const initialTheme = localStorage.getItem("theme");
    console.log("first set");
    return initialTheme ? initialTheme : "light";
  });

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <ColorTheme.Provider value={{theme: theme, setTheme: setTheme}}>
    <UserTweetContext.Provider value={{ tweets: tweets, setTweets: setTweets, user: user}}>
      <div className="container">
        <Header/>
        <Tweets/>
        <RightSide theme={theme} />
      </div>
    </UserTweetContext.Provider>
          </ColorTheme.Provider>
  );
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App };
