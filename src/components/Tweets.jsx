import React, { useContext } from 'react';
import CreateTweet from './CreateTweet'
import Tweet from './Tweet'
import { MyContext } from '../App';


export default function Tweets({theme})
 {
    const TweetsContext  = useContext(MyContext); // Access context
  return (
        <main>
            <div className={theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet theme={theme} /> {/* Remove user prop */}

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {TweetsContext.tweets.map((tweet, index) => <Tweet tweet={tweet} theme={theme} key={index} />)}
        </main>
    )
}
