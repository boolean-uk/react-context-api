import { createContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const AppContext = createContext();


function App() {
    const [tweets, setTweets] = useState(defaultTweets)
        const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light'
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);
        theme === 'light'
            ? document.body.style.backgroundColor = 'white'
            : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <div className="container">
            <AppContext.Provider value={{ user, tweets, setTweets, theme, setTheme, }}>
                <Header />
                <Tweets />
                <RightSide />
            </AppContext.Provider>
        </div>
    )
}

export { App, AppContext };
