import { useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'
import { createContext } from 'react'
import { BrowserRouter } from 'react-router-dom'

const MyContext = createContext();
const ThemeContext = createContext();

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(() => {
        const init = localStorage.getItem('theme')
        return init ? init : 'light'
    })

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
          localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <BrowserRouter>
            <ThemeContext.Provider value={{theme:theme, setTheme:setTheme}}>
                <MyContext.Provider value={{user:user, tweets:tweets, setTweets:setTweets}}>
                        <div className="container">
                            <Header />
                            <Tweets />
                            <RightSide />
                        </div>
                </MyContext.Provider>
            </ThemeContext.Provider>
        </BrowserRouter>
    )
}

export { App, MyContext, ThemeContext };
