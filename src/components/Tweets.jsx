import CreateTweet from './CreateTweet'
import Tweet from './Tweet'
import { useContext } from "react";
import {MyContext, ThemeContext} from "../App";

export default function Tweets() {
  const context = useContext(MyContext, ThemeContext)  

  return (
        <main>
            <div className={context.theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet tweets={context.tweets} setTweets={context.setTweets} user={context.user} theme={context.theme} />

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {context.tweets.map((tweet, index) => <Tweet tweet={tweet} theme={context.theme} key={index} />)}
        </main>
    )
}
