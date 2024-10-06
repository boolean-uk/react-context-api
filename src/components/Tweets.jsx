import { useContext } from 'react'
import { ThemeContext, TweeterContext } from '../App.jsx'
import CreateTweet from './CreateTweet'
import Tweet from './Tweet'

export default function Tweets() {
    const context = useContext(TweeterContext)
    const themeContext = useContext(ThemeContext)

    const theme = themeContext.theme

  return (
        <main>
            <div className={theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet/>

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {context.tweets.map((tweet, index) => <Tweet tweet={tweet} theme={theme} key={index} />)}
        </main>
    )
}
