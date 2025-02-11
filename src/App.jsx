import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'
export const TweetContext = createContext() 
export const ThemeContext = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") ||'light'})



    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <div className="container">
           
            <TweetContext.Provider value = {{tweets, setTweets, user}}>
            <ThemeContext.Provider value={{theme, setTheme}} >
            <Header />
            <Tweets  />
            <RightSide />
            </ThemeContext.Provider>
            </TweetContext.Provider>
        </div>
    )
}

export { App };
