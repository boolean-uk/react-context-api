import CreateTweet from './CreateTweet'
import Tweet from './Tweet'
import {ThemeContext, TweetContext} from "../App.jsx";
import {useContext} from "react";

export default function Tweets() {
    const {theme} = useContext(ThemeContext)
    const {tweets} = useContext(TweetContext)
  return (
        <main>
            <div className={theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet/>

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {tweets.map((tweet, index) => <Tweet tweet={tweet} key={index} />)}
        </main>
    )
}
