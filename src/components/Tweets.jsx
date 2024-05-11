/*importing hooks from the Context.Provider */
import { useContext } from 'react'
import { FormContext, ThemeCon, } from '../App'
import CreateTweet from './CreateTweet'
import Tweet from './Tweet'

/* cleared the parameter change in dependancy, Added ThemeCon UseContext param*/
export default function Tweets() {
    const { tweets, setTweets, user} =useContext(FormContext)
    const { theme } = useContext(ThemeCon)
  return (
        <main>
            <div className={theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet theme={theme} />

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {tweets.map((tweet, index) => <Tweet tweet={tweet} theme={theme} key={index} />)}
        </main>
    )
}
