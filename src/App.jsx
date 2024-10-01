import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";
import { createContext } from "react";

const MyContext = createContext();
const ThemeContext = createContext();

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    console.log(localStorage.getItem('theme'))
    if(localStorage.getItem('theme') === "dark"){
        (document.body.style.backgroundColor = "black")
        setTheme("dark")
    }else {
       (document.body.style.backgroundColor = "white");
       setTheme("white")
    }
       
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <MyContext.Provider
        value={{
          user: user,
          tweets: tweets,
          setTweets: setTweets,
        }}
      >
        <div className="container">
          <Header />
          <Tweets />
          <RightSide />
        </div>
      </MyContext.Provider>
    </ThemeContext.Provider>
  );
}

export { App, ThemeContext, MyContext };
