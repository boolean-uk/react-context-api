import { useEffect, useState, useContext, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'
export const TweetContext = createContext();
export const ThemeContext = createContext();

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light');
    const [userState, setUser] = useState(user);

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <TweetContext.Provider value={{tweets, setTweets, user: userState}}>
            <ThemeContext.Provider value = {{theme , setTheme}}>
            <div className="container">
            <Header/>
            <Tweets/>
            <RightSide/>
            </div>
            </ThemeContext.Provider>
        </TweetContext.Provider>
    )
}

export { App };
