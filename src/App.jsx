import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'
export const TwitterContext = createContext()
export const ThemeContext = createContext()

function App() {

    const [tweets, setTweets] = useState(defaultTweets)

    const savedTheme = localStorage.getItem("theme")
    const [theme, setTheme] = useState(savedTheme ? savedTheme : 'light');

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <ThemeContext.Provider
            value = {{theme: theme, setTheme: setTheme}}
        >
            <TwitterContext.Provider
                value = {{tweets: tweets, setTweets: setTweets, user: user}}
            >
                <div className="container">
                    <Header />
                    <Tweets />
                    <RightSide />
                </div>
            </TwitterContext.Provider>
        </ThemeContext.Provider>
        
    )
}

export { App };
