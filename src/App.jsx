import { createContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const DataContext = createContext() 
const ThemeContext = createContext() 

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, setTheme}}>
        <DataContext.Provider value={{ user, tweets, setTweets}}>
            <div className="container">
                <Header  />
                <Tweets   />
                <RightSide />
            </div>
        </DataContext.Provider>
        </ThemeContext.Provider>
    )
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, DataContext, ThemeContext };
