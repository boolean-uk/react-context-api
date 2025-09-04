import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

export const ApiContext = createContext()
export const ThemeContext = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <>
            <ApiContext.Provider value={{ user, tweets, setTweets}}>
                <ThemeContext.Provider value={{theme, setTheme}}>
                <div className="container">
                    <Header />
                    <Tweets />
                    <RightSide />
                </div>
                </ThemeContext.Provider>
            </ApiContext.Provider>
        </>
    )
}

export { App };
