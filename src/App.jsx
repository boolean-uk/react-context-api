import { createContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const AppContext = createContext()
const ThemeContext = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'light'
        }
        return 'light'
    })

    useEffect(() => {
        if (theme === 'light') {
            document.body.style.backgroundColor = 'white'
        } else {
            document.body.style.backgroundColor = 'black'
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <AppContext.Provider value={{ user, tweets, setTweets }}>
                <div className="container">
                    <Header />
                    <Tweets />
                    <RightSide />
                </div>
            </AppContext.Provider>
        </ThemeContext.Provider>
    )
}

export { AppContext, ThemeContext, App }