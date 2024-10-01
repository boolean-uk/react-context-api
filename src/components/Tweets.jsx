import CreateTweet from "./CreateTweet";
import Tweet from "./Tweet";
import React, { useContext } from "react";
import { TweetContext, ThemeContext } from "../App";

export default function Tweets() {
  const { tweets } = useContext(TweetContext);
  const { theme } = useContext(ThemeContext);

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
        <Tweet tweet={tweet} key={index} />
      ))}
    </main>
  );
}
