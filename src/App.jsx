import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'


const tweetContext = createContext()
const themeContext = createContext()

const loadTheme = () =>{
    return localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
}

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(loadTheme());

    const tweetValue = {
        tweets: tweets,
        setTweets: setTweets,
    }
    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <themeContext.Provider value={{
            theme : theme,
            setTheme: setTheme,
        }}>
        <div className="container">
            <Header/>
            <tweetContext.Provider value={tweetValue}>
            <Tweets />
            </tweetContext.Provider>
            <RightSide/>
        </div>
        </themeContext.Provider>
    )
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, tweetContext, themeContext};
