import { useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'
import { createContext } from 'react'
import CreateTweet from './components/CreateTweet.jsx'
import Tweet from './components/Tweet.jsx'

const ThemeContext = createContext()
const DataContext = createContext()
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
        <ThemeContext.Provider value = {{ theme: theme, setTheme: setTheme }}>
            <DataContext.Provider value = {{ user: user, tweets: tweets, setTweets: setTweets, setTheme: setTheme }}>
                <Header/>
                
                <RightSide/>
                
                <Tweets/>
            </DataContext.Provider>
        </ThemeContext.Provider>
      </div>
    )
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, ThemeContext, DataContext };
