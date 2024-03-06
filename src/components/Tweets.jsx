import CreateTweet from './CreateTweet'
import Tweet from './Tweet'

import { StorageContext, ThemeContext } from '../App'
import { useContext } from 'react'

export default function Tweets() {
    const _theme = useContext(ThemeContext)
    const _storage = useContext(StorageContext)

  return (
        <main>
            <div className={_theme.theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet />

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {_storage.tweets.map((tweet, index) => <Tweet tweet={tweet} key={index} />)}
        </main>
    )
}
