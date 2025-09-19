import CreateTweet from './CreateTweet'
import Tweet from './Tweet'
import { useContext } from 'react'
import { DataContext, ThemeContext } from '../App'

export default function Tweets() {

const themeContext = useContext(ThemeContext)
const dataContext = useContext(DataContext)

  return (
        <main>
            <div className={themeContext.theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet />

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {dataContext.tweets.map((tweet, index) => <Tweet tweet={tweet} key={index} />)}
        </main>
    )
}
