import CreateTweet from './CreateTweet';
import {createContext, useContext} from "react";

import Tweet from './Tweet';
import {MyContext} from "../App.jsx"

const MyContext2 = createContext()
const MyContext3 = createContext()


function Tweets() {
  const context = useContext(MyContext);
  
  return (
    <main>
      <div className={context.theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
        <h2 className="title">Home</h2>
      </div>
     <MyContext2.Provider value={ { theme: context.theme, tweets: context.tweets, setTweets: context.setTweets, user: context.user} }>

      <CreateTweet  />
      </MyContext2.Provider>
      <div className="show-more-tweets">
        <p>Show 35 Tweets</p>
      </div>

      {context.tweets.map((tweet, index) => (
        <Tweet key={index} tweet={tweet} index={index}/>
      ))}
    

    </main>
  );
}
export  {Tweets, MyContext2, MyContext3};