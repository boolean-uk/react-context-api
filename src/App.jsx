import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

export const DataContext = createContext()
export const ThemeContext = createContext()

function App() {
    const loadedTheme = localStorage.getItem('theme')
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(loadedTheme || 'light');

    const value = {
        tweets,
        setTweets,
        user
    }

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <DataContext.Provider value={value}>
                <div className="container">
                    <Header />
                    <Tweets />
                    <RightSide />
                </div>
            </DataContext.Provider>
        </ThemeContext.Provider>
    )
}

export { App };
