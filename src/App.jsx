import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const ThemeContext = createContext();
const DataContext = createContext();

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(localStorage.getItem("theme") === "dark" ? "dark" : "light");

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <ThemeContext.Provider value={ {theme, setTheme} } >
            <DataContext.Provider value={ {user, tweets, setTweets} }>
                <div className="container">
                    <Header />
                    <Tweets />
                    <RightSide />
                </div>
            </DataContext.Provider>
        </ThemeContext.Provider>
    )
}

export { ThemeContext, DataContext, App };
