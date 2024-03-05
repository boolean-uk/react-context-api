import CreateTweet from './CreateTweet'
import Tweet from './Tweet'
import { useContext } from "react";
import { pageContext, themeContext } from "../App";

export default function Tweets() {
    const context = useContext(pageContext)
    const { theme } = useContext(themeContext)

    return (
        <main>
            <div className={theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet tweets={context.tweets} setTweets={context.setTweets} user={context.user} />

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {context.tweets.map((tweet, index) => <Tweet tweet={tweet} key={index} />)}
        </main>
    )
}
