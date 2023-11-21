import { useEffect, useState, useContext, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

export const TweetContext = createContext()
export const ThemeContext = createContext()

function App() {
    let activeTheme = localStorage.getItem('theme')

    if (!activeTheme) {
        activeTheme = 'light'
    }
    
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(activeTheme);

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <TweetContext.Provider value={{user, tweets, setTweets}}>
                <div className="container">
                    <Header />
                    <Tweets />
                    <RightSide />
                </div>
            </TweetContext.Provider>
        </ThemeContext.Provider>
    )
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App };
