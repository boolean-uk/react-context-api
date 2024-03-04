import { useContext } from "react";
import CreateTweet from "./CreateTweet";
import Tweet from "./Tweet";
import { AppContext } from "../App";

export default function Tweets() {
  const AppContextValue = useContext(AppContext);
  console.log("Tweets: ", AppContextValue);
  return (
    <main>
      <div
        className={
          AppContextValue.theme === "dark" ? "top-bar dark" : "top-bar"
        }
      >
        <h2 className="title">Home</h2>
      </div>

      <CreateTweet
        tweets={AppContextValue.tweets}
        setTweets={AppContextValue.setTweets}
        user={AppContextValue.user}
        theme={AppContextValue.theme}
      />

      <div className="show-more-tweets">
        <p>Show 35 Tweets</p>
      </div>

      {AppContextValue.tweets.map((tweet, index) => (
        <Tweet tweet={tweet} theme={AppContextValue.theme} key={index} />
      ))}
    </main>
  );
}
