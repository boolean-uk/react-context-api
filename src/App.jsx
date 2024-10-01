import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const UserContext = createContext(null)
const TweetContext = createContext(null)
const ThemeContext = createContext(null)

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(localStorage.getItem("theme") || localStorage.setItem("theme", "light"));

    const updateTheme = () => {
        if (localStorage.getItem("theme") === null) {
            localStorage.setItem("theme", theme)
        }
        if (localStorage.getItem("theme") === "dark") {
            localStorage.setItem("theme", "light")
            setTheme("light")
        } else {
            localStorage.setItem("theme", "dark")
            setTheme("dark")
        }
    }

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <UserContext.Provider value={{user}}>
            <TweetContext.Provider value={{tweets, setTweets}}>
                <ThemeContext.Provider value={{theme, updateTheme}}>
                    <div className="container">
                        <Header />
                        <Tweets />
                        <RightSide />
                    </div>
                </ThemeContext.Provider>
            </TweetContext.Provider>
        </UserContext.Provider>
    )
}

export { App, UserContext, TweetContext, ThemeContext };
