import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

export const MyContext = createContext()
export const MyTheme = createContext()


function App() {
    const themeToLoad = localStorage.getItem('theme')
    // console.log(localStorage.getItem("theme"))

    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(themeToLoad || 'light');

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <div className="container">
            <MyContext.Provider value={{user, tweets, setTweets}}>
                <MyTheme.Provider value={{ theme, setTheme }}>
                    <Header/>
                    <Tweets />
                    <RightSide />
                </MyTheme.Provider>
            </MyContext.Provider>
        </div>
    )
}

export { App };
