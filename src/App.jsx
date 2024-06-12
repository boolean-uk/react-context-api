import { useEffect, useState,  createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'
export const ThemeContext = createContext()
export const DataContext = createContext()

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
            <ThemeContext.Provider value={{theme: theme,setTheme: setTheme}}>
                <DataContext.Provider value={{tweets: tweets,setTweets: setTweets, user:user}}>
                    <Header />
                    <Tweets />
                </DataContext.Provider>
                <RightSide />
            </ThemeContext.Provider>
        </div>
    )
}

export { App };
