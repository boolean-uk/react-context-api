import { createContext, useContext } from "react";
import CreateTweet from "./CreateTweet";
import Tweet from "./Tweet";
import { MyContext } from "../App";

const TweetContext = createContext();

export default function Tweets() {
  const { tweets, setTweets, theme, setTheme, user } = useContext(MyContext);
  return (
    <main>
      <div className={theme === "dark" ? "top-bar dark" : "top-bar"}>
        <h2 className="title">Home</h2>
      </div>

      <CreateTweet />

      <div className="show-more-tweets">
        <p>Show 35 Tweets</p>
      </div>

      {tweets.map((tweet, index) => (
        <TweetContext.Provider value={{ tweet, index }}>
          <Tweet/>
        </TweetContext.Provider>
      ))}
    </main>
  );
}

export { TweetContext };
