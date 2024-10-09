import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

export const userContext = createContext();
export const themeContext = createContext();

function App() {
    const [tweets, setTweets] = useState(defaultTweets)

    const [theme, setTheme] = useState(() => {
        const initialTheme = localStorage.getItem('theme');
        return initialTheme ? initialTheme : 'light';
    });

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <div className="container">
            <userContext.Provider
                value={{ tweets: tweets, setTweets: setTweets, user: user}}
            >
            <themeContext.Provider
                value={{ theme: theme, setTheme: setTheme}}
            >
                <Header />
                <Tweets />
                <RightSide />
            </themeContext.Provider>
            </userContext.Provider>
        </div>
    )
}

export { App };
