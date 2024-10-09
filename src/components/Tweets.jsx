import CreateTweet from './CreateTweet'
import Tweet from './Tweet'
import { userContext, themeContext } from '../App'
import { useContext } from 'react'

export default function Tweets() {
  const { theme, setTheme } = useContext(themeContext)
  const { tweets, setTweets, user} = useContext(userContext)
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
