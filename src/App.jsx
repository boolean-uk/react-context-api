import { createContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const TwitterContext = createContext();
const ThemeContext = createContext();

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(() => {
        const initialTheme = localStorage.getItem("theme");
        return initialTheme ? initialTheme : "light";
    } );

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black';
          localStorage.setItem("theme", theme)
    }, [theme])

    return (
        <>
            <ThemeContext.Provider value = {{theme, setTheme}}>
                <TwitterContext.Provider value= {{ user, tweets, setTweets}}>
                    <div className="container">
                        <Header/>
                        <Tweets/>
                        <RightSide />
                    </div>
                </TwitterContext.Provider>
            </ThemeContext.Provider>
        </>
    )
}

export {TwitterContext, ThemeContext, App};
