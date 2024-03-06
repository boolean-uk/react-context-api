import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

export const DataContext = createContext()
export const ThemeContext = createContext()

function App() {
    const storedTheme = localStorage.getItem('theme')
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(storedTheme || 'light');

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
          <div className="container">
            <DataContext.Provider value={{user: user, tweets: tweets, setTweets: setTweets}}>
              <Header />
              <Tweets />
            </DataContext.Provider>

            <RightSide />
          </div>
        </ThemeContext.Provider>
    )
}

export { App };