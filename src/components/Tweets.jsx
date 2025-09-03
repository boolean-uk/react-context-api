import CreateTweet from './CreateTweet'
import Tweet from './Tweet'
import { useContext } from "react";
import { TwitterContext } from "../App";
import { ThemeContext } from "../App";

export default function Tweets() {
    const { theme } = useContext(ThemeContext)
    const { tweets, setTweets, user } = useContext(TwitterContext)
    return (
        <main>
            <div className={theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet tweets={tweets} setTweets={setTweets} user={user} theme={theme} />

            {tweets.map((tweet, index) => <Tweet tweet={tweet} theme={theme} key={index} />)}

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>
        </main>
    )
}
