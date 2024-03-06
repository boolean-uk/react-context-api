import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const Context = createContext();
const ThemeContext = createContext();

function App() {
    const [tweets, setTweets] = useState(defaultTweets);
    const initTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "light";
    const [theme, setTheme] = useState(initTheme);

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <div className="container">
            <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
            <Context.Provider value={{user: user, tweets: tweets, setTweets: setTweets}}>
            <Header/>
            <Tweets/>
            <RightSide/>
            </Context.Provider>
            </ThemeContext.Provider>
        </div>
    )
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { Context, ThemeContext,App };
