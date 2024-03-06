import { createContext, useContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const StorageContext = createContext({ user: {}, tweets: [], setTweets: undefined })
const ThemeContext = createContext({ theme: "light", setTheme: undefined })

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [, setTheme] = useState('light')

    useEffect(() => {
        if (localStorage.getItem("theme_mode") === null)
            localStorage.setItem("theme_mode", "light")
    }, [])

    localStorage.getItem("theme_mode") === 'light' ? document.body.style.backgroundColor = 'white' : document.body.style.backgroundColor = 'black'

    return (
        <ThemeContext.Provider value={{ theme: localStorage.getItem("theme_mode"), setTheme: {setTheme} }}>
            <StorageContext.Provider value={{ user: user, tweets: tweets, setTweets: {setTweets} }}>
            <div className="container">
                <Header />
                <Tweets />
                <RightSide />
            </div>
        </StorageContext.Provider>
        </ThemeContext.Provider>
    )
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, ThemeContext, StorageContext }
