import { createContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const StateContext = createContext()

const ThemeContext = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const selectedTheme = localStorage.getItem('theme')
    const [theme, setTheme] = useState(selectedTheme || 'light');
    document.body.classList.add(theme)

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <ThemeContext.Provider value={ { theme, setTheme } }>
            <StateContext.Provider value={ { user, tweets, setTweets } }>
                <div className="container">
                    <Header />
                    <Tweets />
                    <RightSide />
                </div>
            </StateContext.Provider>
        </ThemeContext.Provider>
    )
}

export { App, StateContext, ThemeContext };
