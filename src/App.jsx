import { useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import defaultUser from './assets/data/user.js'
import { createContext } from 'react'

const DataContext = createContext()
const ThemeContext = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [user, setUser] = useState(defaultUser)
    const [theme, setTheme] = useState(() => {
        const inital = localStorage.getItem('theme');
        return inital ? inital : "light"
    });

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
    <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
        <DataContext.Provider value={{ tweets: tweets, user: user, setTweets: setTweets }}>
            <div className="container">
                <Header />
                <Tweets />
                <RightSide />
            </div>
        </DataContext.Provider>
    </ThemeContext.Provider>
    )
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, DataContext, ThemeContext };
