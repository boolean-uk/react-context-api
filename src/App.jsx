import { createContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'
export const TwitterContext = createContext();
export const ThemeContext = createContext();

function App() {
    const defaultTheme = 'light'
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(defaultTheme);

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
    <TwitterContext.Provider value={{user, tweets, setTweets}}>
      <ThemeContext.Provider value={{theme, setTheme, defaultTheme}}>
        <div className="container">
            <Header />
            <Tweets />
            <RightSide />
        </div>
       </ThemeContext.Provider>   
    </TwitterContext.Provider>
    )
}

export { App };
