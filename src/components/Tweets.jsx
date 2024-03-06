import { useContext } from "react";
import { TweetContext } from "../App";
import { ThemeContext } from "../App";

import CreateTweet from "./CreateTweet";
import Tweet from "./Tweet";

export default function Tweets() {

  const tweetContext = useContext(TweetContext);
  const themeContext = useContext(ThemeContext);

  return (
    <main>
      <div
        className={themeContext.theme === "dark" ? "top-bar dark" : "top-bar"}
      >
        <h2 className="title">Home</h2>
      </div>

      <CreateTweet />

      <div className="show-more-tweets">
        <p>Show 35 Tweets</p>
      </div>

      {tweetContext.tweets.map((tweet, index) => (
        <Tweet tweet={tweet} key={index} />
      ))}
    </main>
  );
}
