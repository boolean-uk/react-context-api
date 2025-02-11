import { useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import userImport from './assets/data/user.js'

import { createContext } from "react"
const DataContext = createContext()
const ThemeContext = createContext();

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(() => {
        const initialTheme = localStorage.getItem("theme");
        return initialTheme ? initialTheme : "light";
      });
    const [user, setUser] = useState(userImport);

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <div className="container">
            <ThemeContext.Provider value={ { theme, setTheme } }>
                <DataContext.Provider value={ { user, tweets, setTweets } }>
                    <Header />
                    <Tweets />
                    <RightSide />
                </DataContext.Provider>
            </ThemeContext.Provider>
        </div>
    )
}

export { DataContext as DataContext, ThemeContext as ThemeContext, App };