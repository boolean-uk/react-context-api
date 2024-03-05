import CreateTweet from './CreateTweet'
import Tweet from './Tweet'
import { useContext } from 'react'
import { TweetContext, ThemeContext } from '../App'

export default function Tweets() {
    
    const { theme, setTheme } = useContext(ThemeContext)
    const {  tweets } = useContext(TweetContext)

  return (
        <main>
            <div className={theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>


            {/* Calling component to post a tweet */}
            <CreateTweet />

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {/* Display each tweet */}
            {tweets.map((tweet, index) => <Tweet tweet={tweet} theme={theme} key={index} />)}
        </main>
    )
}
