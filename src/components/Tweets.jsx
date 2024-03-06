import CreateTweet from './CreateTweet'
import Tweet from './Tweet'
import { TweetContext, ThemeContext } from "../App.jsx"
import { useContext } from "react"

export default function Tweets() {
    const tweetContext = useContext(TweetContext)
    const themeContext = useContext(ThemeContext)
    console.log(tweetContext.tweets)
  return (
    <main>
    <div className={themeContext.theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
        <h2 className="title">Home</h2>
    </div>

    <CreateTweet />

    <div className="show-more-tweets">
        <p>Show 35 Tweets</p>
    </div>

    {tweetContext.tweets.map((tweet, index) => <Tweet tweet={tweet} key={index} />)}
    </main>

    )
}
