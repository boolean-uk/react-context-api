import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

export const DataContext = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState('light');

    const value = {
        tweets,
        setTweets,
        theme,
        setTheme,
        user
    }

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <DataContext.Provider value={value}>
            <div className="container">
                <Header />
                <Tweets />
                <RightSide />
            </div>
        </DataContext.Provider>
    )
}

export { App };
