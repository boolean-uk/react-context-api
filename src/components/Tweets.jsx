import { useContext } from 'react'
import CreateTweet from './CreateTweet'
import Tweet from './Tweet'
import { TweetsContext, SetTweetsContext, ThemeContext} from '../App'
import React from 'react'

export default function Tweets() {

    const tweets = React.useContext(TweetsContext)
    const setTweeets = React.useContext(SetTweetsContext)
    const { theme } = React.useContext(ThemeContext);
  return (
        <main>
            <div className={theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet />

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {tweets.map((tweet, index) => <Tweet tweet={tweet} key={index} />)}
        </main>
    )
}
