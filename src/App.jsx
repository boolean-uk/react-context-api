import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const ContextData = createContext()
const ContextTheme = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState((localStorage.getItem('theme') !== null) ? localStorage.getItem('theme') : 'light' );

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <div className="container">
            <ContextTheme.Provider value={ {theme, setTheme} }>
            <ContextData.Provider value={ {tweets, setTweets, user} }>
                <Header />
                <Tweets />
                <RightSide />
            </ContextData.Provider>
            </ContextTheme.Provider>
        </div>
    )
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, ContextData, ContextTheme };
