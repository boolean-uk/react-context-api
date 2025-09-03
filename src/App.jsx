import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

function getInitialTheme() {
    return localStorage.getItem("theme") || 'light'
}

const ThemeContext = createContext();
const AppContext = createContext();

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(getInitialTheme());

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])



    return (
        <div className="container">
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <AppContext.Provider value={{ user, tweets, setTweets }}>
                    <Header />
                    <Tweets />
                    <RightSide />
                </AppContext.Provider>
            </ThemeContext.Provider>
        </div>
    )
}

export { App, ThemeContext, AppContext };