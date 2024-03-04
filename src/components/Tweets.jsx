import { useContext } from "react";
import { AppContext, ThemeContext } from "../App";
import CreateTweet from "./CreateTweet";
import Tweet from "./Tweet";

export default function Tweets() {
  const context = useContext(AppContext);
  const themeContext = useContext(ThemeContext);

  return (
    <main>
      <div
        className={themeContext.theme === "dark" ? "top-bar dark" : "top-bar"}
      >
        <h2 className="title">Home</h2>
      </div>

      <CreateTweet
        tweets={context.tweets}
        setTweets={context.setTweets}
        user={context.user}
        theme={themeContext.theme}
      />

      <div className="show-more-tweets">
        <p>Show 35 Tweets</p>
      </div>

      {context.tweets.map((tweet, index) => (
        <Tweet tweet={tweet} theme={themeContext.theme} key={index} />
      ))}
    </main>
  );
}
