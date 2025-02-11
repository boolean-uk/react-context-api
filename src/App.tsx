import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import defaultTweets, { Tweet } from "./assets/data/tweets.js";
import user, { User } from "./assets/data/user.js";
import Header from "./components/Header";
import Tweets from "./components/Tweets.jsx";
import RightSide from "./components/RightSide.jsx";

export enum Theme {
  "light",
  "dark",
}

export const TweetContext = createContext<{
  user: User;
  tweets: Tweet[];
  setTweets: Dispatch<SetStateAction<Tweet[]>>;
}>(null!);

export const ThemeContext = createContext<{
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}>(null!);

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState(() => {
    const t = localStorage.getItem("theme");
    if (t !== null) return Theme[t as keyof typeof Theme];
    return Theme.dark;
  });

  useEffect(() => {
    theme === Theme.light
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
    localStorage.setItem("theme", Theme[theme]);
  }, [theme]);

  return (
    <TweetContext.Provider value={{ user, tweets, setTweets }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className="container">
          <Header />
          <Tweets />
          <RightSide />
        </div>
      </ThemeContext.Provider>
    </TweetContext.Provider>
  );
}

export { App };
