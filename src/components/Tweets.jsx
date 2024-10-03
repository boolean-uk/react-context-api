import { MyContext } from '../App'
import CreateTweet from './CreateTweet'
import Tweet from './Tweet'
import { useContext } from 'react'

export default function Tweets({ theme }) {

    const context = useContext(MyContext);

  return (
        <main>
            <div className={theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet theme={theme} />

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {context.tweets.map((tweet, index) => <Tweet tweet={tweet} theme={theme} key={index} />)}
        </main>
    )
}
