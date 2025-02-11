import { useContext } from 'react'
import { ThemeContext, TweetContext } from '../App'
import CreateTweet from './CreateTweet'
import Tweet from './Tweet'

export default function Tweets() {

    const themeContext = useContext(ThemeContext)
    const tweetContext = useContext(TweetContext)

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
