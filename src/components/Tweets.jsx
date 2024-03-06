import CreateTweet from './CreateTweet'
import Tweet from './Tweet'
import { useContext } from "react";
import { AppContext, ThemeContext } from "./../App";

export default function Tweets() {
    const context = useContext(AppContext)
    const themectx = useContext(ThemeContext)
  return (
        <main>
            <div className={themectx.theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet/>

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {context.tweets.map((tweet, index) => <Tweet tweet={tweet} key={index} />)}
        </main>
    )
}
