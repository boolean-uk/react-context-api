import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";
import { createContext, useContext } from "react";

export  const MyContext = createContext();

function App() {

  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <MyContext.Provider value={{user, tweets, setTweets}}>
      <div className="container">
        <Header user={user} theme={theme} setTheme={setTheme} />
        <Tweets
          theme={theme}
        />
        <RightSide theme={theme} />
      </div>
    </MyContext.Provider>
  );
}

export { App };
