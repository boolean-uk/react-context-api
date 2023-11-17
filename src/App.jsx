import { createContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const UserContext = createContext()
const ThemeContext = createContext()

const getTheme = () => {
        const CurrentTheme = localStorage.getItem('theme')
        return CurrentTheme || 'light'
    }

function App() {

    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(getTheme());

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <div className="container">
            <UserContext.Provider value={{tweets, user, setTweets}}>
                <ThemeContext.Provider value={{theme, setTheme}}>
            <Header/>
            <Tweets/>
            <RightSide/>
            </ThemeContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, UserContext, ThemeContext };
