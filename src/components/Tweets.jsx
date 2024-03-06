import { ContextData, ContextTheme } from '../App.jsx'
import { useContext } from 'react'

import CreateTweet from './CreateTweet'
import Tweet from './Tweet'

export default function Tweets() {
    const contextTheme = useContext(ContextTheme)
    const contextData = useContext(ContextData)
  
    return (
        <main>
            <div className={contextTheme.theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet /> 

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {contextData.tweets.map((tweet, index) => <Tweet tweet={tweet} theme={contextTheme.theme} key={index} />)}
        </main>
    )
}
