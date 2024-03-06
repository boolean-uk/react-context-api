import { useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'
import React from 'react'


export const UserContext = React.createContext()
export const TweetsContext = React.createContext()
export const SetTweetsContext = React.createContext()
export const ThemeContext = React.createContext()
function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState('dark');


    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if(storedTheme) {
            const parsedTheme = (storedTheme)
            setTheme(parsedTheme) // Update the component's state immediately
           
        } else {
            setTheme("light")
        }
    }, [])

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    

    const themeValue = {
        theme, 
        setTheme
    }

    return (
        <ThemeContext.Provider value={themeValue}>
        <UserContext.Provider value = {user}>
        <div className="container">
            <Header />

            <TweetsContext.Provider value={tweets}>
            <SetTweetsContext.Provider value={setTweets}>
            <Tweets/>
            </SetTweetsContext.Provider>
            </TweetsContext.Provider>

            <RightSide/>
        </div>
        </UserContext.Provider>
        </ThemeContext.Provider>
    )
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App };
