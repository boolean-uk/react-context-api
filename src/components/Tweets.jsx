import CreateTweet from './CreateTweet'
import Tweet from './Tweet'
import { ThemeContext } from "../App";
import { TweetsContext } from '../App';
import { useContext } from "react";

export default function Tweets() {
    const themeContext = useContext(ThemeContext)
    const tweetsContext = useContext(TweetsContext)

  return (
        <main>
            <div className={themeContext.theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet />

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {tweetsContext.tweets.map((tweet, index) => <Tweet tweet={tweet} key={index} />)}
        </main>
    )
}
