import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const TweetContext = createContext()
const ThemeContext = createContext()

function App() {
    const storedTheme = JSON.parse(localStorage.getItem('theme'))
    console.log(localStorage.getItem('theme'))
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(storedTheme || 'light');
    
    

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <div className="container">
            <ThemeContext.Provider value={ {theme, setTheme}}>
                <TweetContext.Provider value={ {tweets, setTweets, user }}>
                    <Header />
                    <Tweets />
                    <RightSide />
                </TweetContext.Provider>
            </ThemeContext.Provider>
        </div>
    )
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { ThemeContext, TweetContext, App };
