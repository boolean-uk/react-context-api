import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const TwitterContext = createContext()
const ThemeContext = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    useEffect(() => {
        theme === 'light'
            ? document.body.style.backgroundColor = 'white'
            : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>

            <TwitterContext.Provider value={{
                tweets: tweets, setTweets: setTweets,
                user: user
            }}>
                <div className="container">
                    <Header />
                    <Tweets />
                    <RightSide />
                </div>
            </TwitterContext.Provider>
        </ThemeContext.Provider>
    )
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { TwitterContext, ThemeContext, App };
