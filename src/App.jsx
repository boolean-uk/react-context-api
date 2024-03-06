import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const AppContext = createContext()
const ThemeContext = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(localStorage.getItem('theme')?localStorage.getItem('theme'):'light');

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <div className="container">
            <AppContext.Provider value={{ appName: 'Twitter', tweets: tweets, setTweets: setTweets, user:user}}>
            <ThemeContext.Provider value={{theme:theme, setTheme:setTheme}}>
            <Header />
            <Tweets  />
            <RightSide theme={theme} /></ThemeContext.Provider>
            </AppContext.Provider>
        </div>
    )
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, AppContext ,ThemeContext};
