import { createContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const TweetContext = createContext()
const ThemeContext= createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(localStorage.getItem('current theme:'));

    if (localStorage.getItem('current theme:') === null) {
        setTheme('light')
        localStorage.setItem('current theme:', 'light')
    }

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
        <TweetContext.Provider value={{user: user, tweets: tweets, setTweets: setTweets}}>
        <div className="container">
            <Header />
            <Tweets />
            <RightSide />
        </div>
        </TweetContext.Provider>
        </ThemeContext.Provider>
    )
}

export { App, TweetContext, ThemeContext };
