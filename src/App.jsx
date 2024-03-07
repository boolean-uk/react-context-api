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
  //Set the state the the localstorage value, or set it
  //to light if localstorage is cleared
  const [theme, setTheme] = useState(
    localStorage.getItem("lastTheme") || "light"
  );

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <div className="container">
      <MyContext.Provider value={{ user, tweets, setTweets }}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Header />
          <Tweets />
          <RightSide />
        </ThemeContext.Provider>
      </MyContext.Provider>
    </div>
  );
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, MyContext, ThemeContext };
