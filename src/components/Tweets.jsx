import CreateTweet from './CreateTweet'
import Tweet from './Tweet'
import { NoContext } from "../App";
import { useContext } from "react";
import {ConTheme} from "../App";

export default function Tweets({  }) {

    const context=useContext(NoContext)
    const themes=useContext(ConTheme)
    const{user}=context
    const{theme}=themes
    const{setTweets}=context
    const{tweets}=context



  return (
        <main>
            <div className={theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet  />

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {tweets.map((tweet, index) => <Tweet tweet={tweet} key={index} />)}
        </main>
    )
}
