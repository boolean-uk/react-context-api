import CreateTweet from './CreateTweet'
import Tweet from './Tweet'
import { ThemeContext, TweetContext } from '../App'
import { useContext } from 'react'

export default function Tweets() {
    const {tweets} = useContext(TweetContext)
    const {theme, setTheme} = useContext(ThemeContext)
    return (
        <main>
            <div className={theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet/>

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {tweets.map((tweet, index) => <Tweet tweet={tweet} theme={theme} key={index} />)}
        </main>
    )
}
