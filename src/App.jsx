import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'
export const ThemeContext = createContext()
export const TweetsContext = createContext()
export const UserContext = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    })

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'

        localStorage.setItem('theme', theme);
    }, [theme])

    return (
        <UserContext.Provider value={{user: user}}>
        <TweetsContext.Provider value={{tweets: tweets, setTweets: setTweets}}>
        <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
            <div className="container">
                <Header />
                <Tweets />
                <RightSide />
            </div>
        </ThemeContext.Provider>
        </TweetsContext.Provider>
        </UserContext.Provider>
    )
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App };
