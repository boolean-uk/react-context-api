import CreateTweet from './CreateTweet'
import Tweet from './Tweet'
import { useContext } from 'react'
import { PostContext, ThemeContext } from '../App'

export default function Tweets() {
    const postContext = useContext(PostContext)
    const themeContext = useContext(ThemeContext)

  return (
        <main>
            <div className={themeContext.theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet tweets={postContext.tweets} setTweets={postContext.setTweets} user={postContext.user} theme={themeContext.theme} />

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {postContext.tweets.map((tweet, index) => <Tweet tweet={tweet} theme={themeContext.theme} key={index} />)}
        </main>
    )
}
