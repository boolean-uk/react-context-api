import { useEffect, useState } from "react";
import { DataContext, ThemeContext } from "./Contexts.jsx";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const activeTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(activeTheme);

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <div className="container">
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <DataContext.Provider value={{ user, tweets, setTweets }}>
          <Header />
          <Tweets />
        </DataContext.Provider>
        <RightSide />
      </ThemeContext.Provider>
    </div>
  );
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, DataContext };
