import { createContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const AppContext = createContext()
const LocalStorageContext = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <div className="container">
            <AppContext.Provider value={{user, theme, setTheme, tweets, setTweets}}>
                <LocalStorageContext.Provider value={{theme, setTheme}}>
                    <Header />
                    <Tweets />
                    <RightSide />
                </LocalStorageContext.Provider>
            </AppContext.Provider>
        </div>
    )
}

export { App, AppContext, LocalStorageContext };
