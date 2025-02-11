import { createContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const TweetsContext = createContext()
const ThemeContext = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    // if theme has not been set in local storage, set to light mode
    if (!theme) {
        setTheme("light")
        localStorage.setItem("theme", "light")
    }

    useEffect(() => {
        theme === 'light'
            ? document.body.style.backgroundColor = 'white'
            : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <TweetsContext.Provider value={{ tweets, setTweets, user }}>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <div className="container">
                    <Header />
                    <Tweets />
                    <RightSide />
                </div>
            </ThemeContext.Provider>
        </TweetsContext.Provider>
    )
}

export { TweetsContext, ThemeContext, App };
