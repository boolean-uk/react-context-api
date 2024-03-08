import { useContext } from "react";
import { TwitterContext, ThemeContext } from "../App";

import CreateTweet from './CreateTweet'
import Tweet from './Tweet'

export default function Tweets() {
    const twitterContext = useContext(TwitterContext);
    const themeContext = useContext(ThemeContext);
  return (
        <main>
            <div className={themeContext.theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet />

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {twitterContext.tweets.map((tweet, index) => <Tweet tweet={tweet} key={index} />)}
        </main>
    )
}
