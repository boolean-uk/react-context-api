import { useEffect, useState, createContext } from "react";
import Header from "./components/Header";
import {Tweets} from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

const MyContext = createContext()

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState(() =>{
    const savedTheme = localStorage.getItem('userTheme');
    return savedTheme ? JSON.parse(savedTheme) : 'light';
  });

  useEffect(() => {
    localStorage.setItem('userTheme', JSON.stringify(theme));
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
     <MyContext.Provider value={ { theme: theme, tweets: tweets, setTweets: setTweets, user: user, setTheme: setTheme} }>
    <div className="container">
      <Header />
      <Tweets />
      <RightSide />
    </div>
    </MyContext.Provider>
  );
}

export { App, MyContext};
