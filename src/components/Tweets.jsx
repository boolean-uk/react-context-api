import CreateTweet from './CreateTweet'
import Tweet from './Tweet'
import { DataContext, ThemeContext } from "../App"
import { useContext } from "react"

export default function Tweets() {
    const dataContext = useContext(DataContext)
    const themeContext = useContext(ThemeContext)
  return (
        <main>
            <div className={themeContext.theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet tweets={dataContext.tweets} setTweets={dataContext.setTweets} user={dataContext.user} theme={themeContext.theme} />

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {dataContext.tweets.map((tweet, index) => <Tweet tweet={tweet} theme={themeContext.theme} key={index} />)}
        </main>
    )
}
