import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

export const ContextTwitter = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(() => {
        const startingTheme = localStorage.getItem('theme')
        return startingTheme ? startingTheme : 'dark' //dark theme is the best theme :)
    })

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <div className="container">
            <ContextTwitter.Provider value={{user, tweets, setTweets, theme, setTheme}}>
                <Header/>
                <Tweets/>
                <RightSide/>
            </ContextTwitter.Provider>
        </div>
    )
}

export { App };
