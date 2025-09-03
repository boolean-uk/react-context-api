import { useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'
import { createContext } from 'react'

const MyContext = createContext();
const ThemeContext = createContext();

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light');

    useEffect(() => {
        theme === 'light'
            ? document.body.style.backgroundColor = 'white'
            : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <div className="container">
            <MyContext.Provider value={{ user, tweets, setTweets }}>
                <ThemeContext.Provider value={{ theme, setTheme }}>
                    <Header />
                    <Tweets />
                    <RightSide />
                </ThemeContext.Provider>
            </MyContext.Provider>
        </div>
    )
}

export { MyContext, ThemeContext, App };
