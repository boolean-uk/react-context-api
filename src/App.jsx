import { useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'
import UserContext from './context/UserContext'
import TweetsContext from './context/TweetsContext.js'
import ThemeContext from './context/ThemeContext.js'

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const localStorageTheme = localStorage.getItem("theme")
    const [theme, setTheme] = useState(localStorageTheme ?? 'light');

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    function onThemeChange(newTheme) {
        setTheme(newTheme)
            localStorage.setItem( "theme", newTheme )
    }

    return (
        <ThemeContext.Provider value={theme}>
        <TweetsContext.Provider value={tweets}>
        <UserContext.Provider value={user}>
        <div className="container">
            <Header setTheme={onThemeChange} />
            <Tweets setTweets={setTweets}/>
            <RightSide/>
        </div>
        </UserContext.Provider>
        </TweetsContext.Provider>
        </ThemeContext.Provider>
    )
}

export { App };
