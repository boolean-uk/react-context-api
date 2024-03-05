import { createContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const TwitterContext = createContext()
const ThemeContext = createContext()

function getInitialTheme() {
    const theme = localStorage.getItem("theme")

    return theme ? theme : 'light'
}

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
        <ThemeContext.Provider value={{theme, setTheme}}>
            <TwitterContext.Provider value={ { user, tweets, setTweets } }>
                <Header />
                <Tweets />
                <RightSide />
            </TwitterContext.Provider>
        </ThemeContext.Provider>
        </div>
    )
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { TwitterContext, ThemeContext, App };
