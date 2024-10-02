import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const AppContext = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(localStorage.getItem('theme'));


    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [localStorage.getItem('theme')])

    return (
        <div className="container">
            <AppContext.Provider value={{user, tweets, theme, setTheme, setTweets}}>
                <Header />
                <Tweets />
                <RightSide />
            </AppContext.Provider>
        </div>
    )
}

export { App, AppContext };
