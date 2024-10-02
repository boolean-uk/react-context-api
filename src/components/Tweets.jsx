import CreateTweet from './CreateTweet'
import Tweet from './Tweet'
import { useContext } from 'react'
import { TweetContext, ThemeContext, UserContext } from '../App'


export default function Tweets() {

    const user = useContext(UserContext)
    const theme = useContext(ThemeContext)
    const { tweets, setTweets} = useContext(TweetContext)


    console.log('Tweets', tweets)
  return (
        <main>
            <div className={theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet tweets={tweets} setTweets={setTweets} user={user} theme={theme} />

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {tweets.map((tweet, index) => <Tweet tweet={tweet} theme={theme} key={index} />)}
        </main>
    )
}
