import CreateTweet from './CreateTweet'
import Tweet from './Tweet'
import { useContext } from 'react'
import { MyContext, ThemeContext } from '../App'

export default function Tweets() {

    const context = useContext(MyContext)
    const themeContext = useContext(ThemeContext)

  return (
        <main>
            <div className={themeContext.theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet tweets={context.tweets} setTweets={context.setTweets} user={context.user} theme={themeContext.theme} />

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {context.tweets.map((tweet, index) => <Tweet tweet={tweet} theme={themeContext.theme} key={index} />)}
        </main>
    )
}