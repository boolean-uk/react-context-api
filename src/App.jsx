import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const twitterContext = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        theme === 'light'
            ? document.body.style.backgroundColor = 'white'
            : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <div className="container">
            <twitterContext.Provider value={{user: user, theme: theme, setTheme: setTheme, tweets: tweets, setTweets: setTweets}}>
                <Header />
                <Tweets />
                <RightSide />
            </twitterContext.Provider>
        </div>
    )
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, twitterContext };
