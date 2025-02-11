import { useContext } from "react"
import { MyContext } from "../App"
import CreateTweet from './CreateTweet'
import Tweet from './Tweet'


export default function Tweets() {
    const context = useContext(MyContext)

  return (
        <main>
            <div className={context.theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
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
