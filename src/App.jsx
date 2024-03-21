import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

const userContext = createContext();
const tweetsContext = createContext();

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    theme === "light" ? (document.body.style.backgroundColor = "white") : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <userContext.Provider value={{ user }}>
      <div className="container">
        <Header theme={theme} setTheme={setTheme} />
        <tweetsContext.Provider value={{ tweets, setTweets }}>
          <Tweets theme={theme} />
        </tweetsContext.Provider>
        <RightSide theme={theme} />
      </div>
    </userContext.Provider>
  );
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, userContext, tweetsContext };
