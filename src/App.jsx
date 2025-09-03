import { useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'
import { createContext } from 'react'

const MyContext = createContext();
const ThemeContext = createContext();
const TweetContext = createContext();
const UserContext = createContext();
function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(localStorage.getItem("theme") === "dark" ? "dark" : "light");
  console.log(localStorage.getItem("theme"))
    

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

  return (
    <div className="container">
        <ThemeContext.Provider value={{theme, setTheme}}>
        <TweetContext.Provider value={{tweets, setTweets}}>
        <UserContext.Provider value={{user}}>
        <Header/>
        <Tweets/>
        <RightSide/>
      </UserContext.Provider>
      </TweetContext.Provider>
      </ThemeContext.Provider>
    </div>
    )
}

export {MyContext, App, ThemeContext, TweetContext, UserContext};
