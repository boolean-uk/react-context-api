import { useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'
import { createContext } from 'react'

function getInitialTheme() {
    return localStorage.getItem("theme") || 'light'
}
const TweetContext = createContext()
const ThemeContext = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(getInitialTheme());

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (

        <div className="container">
        <TweetContext.Provider value = {{user, setTweets, tweets}}>
            <ThemeContext.Provider value = {{theme, setTheme, }}>
            <Header/>
            <Tweets/>
            <RightSide/>
            </ThemeContext.Provider>
        </TweetContext.Provider>
        </div>
    )
}

export { TweetContext, App, ThemeContext };
