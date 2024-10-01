import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const MyContext = createContext()
const ThemeContext = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(localStorage.getItem('theme'));
    const ContextValue = {user, tweets, setTweets}
    const ThemeContextValue = {theme, setTheme}

    useEffect(() => {
        localStorage.getItem('theme') === 'light' || localStorage.length === 0
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <div className="container">
            <ThemeContext.Provider value={ThemeContextValue}>
                <MyContext.Provider value={ContextValue}>
                    <Header />
                    <Tweets />
                    <RightSide />
                </MyContext.Provider>
            </ThemeContext.Provider>
        </div>
    )
}

export { App, MyContext, ThemeContext };
