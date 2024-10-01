import { useContext } from 'react'
import CreateTweet from './CreateTweet'
import Tweet from './Tweet'
import { ThemeContext, TweetContext } from '../App'

export default function Tweets({}) {
    
    const themeContext = useContext(ThemeContext)
    const tweetContext = useContext(TweetContext)

  return (
        <main>
            <div className={themeContext.theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet tweets={tweetContext.tweets} setTweets={tweetContext.setTweets} user={tweetContext.user} theme={tweetContext.theme} />

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {tweetContext.tweets.map((tweet, index) => <Tweet tweet={tweet} theme={tweetContext.theme} key={index} />)}
        </main>
    )
}
