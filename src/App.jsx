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
        <ThemeContext.Provider value = {{ theme, setTheme }}>
            <Context.Provider value={{ user, tweets, setTweets }}>
                <div className="container">
                    <Header />
                    <Tweets />
                    <RightSide />
                </div>
            </Context.Provider>
        </ThemeContext.Provider>
    );
}

export { App, Context, ThemeContext };
