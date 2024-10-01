import { useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'
import { createContext } from 'react'

export const appContext = createContext();
export const themeContext = createContext();

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
        <appContext.Provider value={{tweets: tweets, setTweets: setTweets, user: user }}>
        <themeContext.Provider value={{theme: theme, setTheme: setTheme}} >
        <div className="container">
            <Header />
            <Tweets />
            <RightSide />
        </div>
        </themeContext.Provider>
        </appContext.Provider>
    </>
    )
}

export { App };
