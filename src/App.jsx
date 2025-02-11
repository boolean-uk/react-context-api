import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

export const TwitterContext = createContext();
export const ThemeContext = createContext();

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(localStorage['theme'] == undefined ? "light" : localStorage['theme']);

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
        localStorage['theme'] = theme;
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
        <TwitterContext.Provider value={{tweets, setTweets, user}}>
            <div className="container">
                <Header />
                <Tweets />
                <RightSide />
            </div>
        </TwitterContext.Provider> 
        </ThemeContext.Provider> 
    )
}

export { App };
