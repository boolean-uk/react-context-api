import { useContext } from "react";
import { tweetContext } from "../App";
import CreateTweet from "./CreateTweet";
import Tweet from "./Tweet";

export default function Tweets({ theme }) {
    const { user, tweets, setTweets } = useContext(tweetContext);
    return (
        <main>
            <div className={theme === "dark" ? "top-bar dark" : "top-bar"}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet theme={theme} />

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {tweets.map((tweet, index) => (
                <Tweet tweet={tweet} theme={theme} key={index} />
            ))}
        </main>
    );
}
