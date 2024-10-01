import { createContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const Context = createContext()
const ThemeContext = createContext()

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
            <div className="container">
                <ThemeContext.Provider value={{ theme, setTheme }}>
                    <Context.Provider value={{ tweets, setTweets, user }}>
                        <Header />
                        <Tweets />
                        <RightSide />
                    </Context.Provider>
                </ThemeContext.Provider>
            </div>
        </>
    )
}

export { App, Context, ThemeContext };
