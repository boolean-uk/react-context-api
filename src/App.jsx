import { createContext, useContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const TweetContext = createContext()
const ThemeContext = createContext()

function App() {

    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState('light');

    const applyTheme = () => {
        theme === 'light'
        ? document.body.style.backgroundColor = 'white'
        : document.body.style.backgroundColor = 'black'
    }

    useEffect(() => applyTheme(), [theme])

    return (
        <TweetContext.Provider value={{
            user: user,
            tweets: tweets,
            setTweets: setTweets
        }}>
            <ThemeContext.Provider value={{theme, setTheme, applyTheme}}>
                <div className="container">
                    <Header />
                    <Tweets tweets={tweets} setTweets={setTweets} user={user} />
                    <RightSide />
                </div>
            </ThemeContext.Provider>
        </TweetContext.Provider>
    )
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, TweetContext, ThemeContext };