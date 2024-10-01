import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user1 from './assets/data/user.js'
export const UserContext = createContext()
export const TweetContext = createContext()
export const ThemeContext = createContext()

function App() {
    const [user] = useState(user1)
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(() => {
        const initialTheme = localStorage.getItem("theme");
        return initialTheme ? initialTheme : "light";
    });

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <div className="container">
            <ThemeContext.Provider
                value={{ theme: theme, setTheme: setTheme }}
            >
                <UserContext.Provider
                    value={{ user: user}}
                >
                    <TweetContext.Provider
                        value={{ tweets: tweets, setTweets: setTweets }}
                    >
                        <Tweets />
                    </TweetContext.Provider>
                    <Header />
                    <RightSide />
                </UserContext.Provider>
            </ThemeContext.Provider>
        </div>
    )
}

export { App };