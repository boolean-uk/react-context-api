import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'
export const UserContext = createContext();
export const ThemeContext = createContext();


function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const sometheme = localStorage.getItem("theme")
        // console.log(sometheme)
        if (sometheme != null) setTheme(sometheme)
        else setTheme("light")
    },[])

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <div className="container">
            <ThemeContext.Provider value={{theme, setTheme}}>
                <UserContext.Provider value={{ user, setTweets, tweets }}>
                    <Header />
                    <Tweets />
                </UserContext.Provider>
                <RightSide />
            </ThemeContext.Provider>
        </div>
    )
}

export { App };
