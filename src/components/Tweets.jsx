import CreateTweet from './CreateTweet'
import Tweet from './Tweet'
import { AppContext } from '../App'
import { useContext } from 'react'

export default function Tweets() {
    
    const context = useContext(AppContext)
    return (
        <main>
            <div className={context.theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet />

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {context.tweets.map((tweet, index) => <Tweet tweet={tweet} theme={context.theme} key={index} />)}
        </main>
    )
}
