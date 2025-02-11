import { useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'
import { createContext } from 'react'

const ThemeContext = createContext()
const TweetsContext = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    if (theme === null){
        localStorage.setItem("theme", "light")
    }

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (

        <TweetsContext.Provider value={{tweets, setTweets, user}}>
            <ThemeContext.Provider value={{theme, setTheme}}>
                <div className="container">
                    <Header />
                    <Tweets />
                    <RightSide />
                </div>
            </ThemeContext.Provider>
        </TweetsContext.Provider>
    )
}

export {ThemeContext, TweetsContext, App };
