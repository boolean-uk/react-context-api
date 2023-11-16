import { useEffect, useState, createContext } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";
const TweetsContext = createContext();
const UserContext = createContext();
function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <TweetsContext.Provider value={{ tweets, setTweets }}>
      <UserContext.Provider value={{ user }}>
        <div className='container'>
          <Header user={user} theme={theme} setTheme={setTheme} />
          <Tweets theme={theme} />
          <RightSide theme={theme} />
        </div>
      </UserContext.Provider>
    </TweetsContext.Provider>
  );
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, TweetsContext, UserContext };
