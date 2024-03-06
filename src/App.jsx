import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const TweetContext = createContext()
const ThemeContext = createContext()
const UserContext = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState('light');

    //set theme from local storage
    useEffect(() => {
        if (localStorage.getItem("theme") === 'dark') {
          setTheme('dark');
        }
      }, []);
    
    useEffect(() => {
        theme === 'light'
            ? document.body.style.backgroundColor = 'white'
            : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <div className="container">
            <TweetContext.Provider value={{ tweets, setTweets }}>           {/* fixa hierarki */}
                <ThemeContext.Provider value={{ theme, setTheme }}>
                    <UserContext.Provider value={{ user }}>
                        <Header />
                        <Tweets />
                        <RightSide />
                    </UserContext.Provider>
                </ThemeContext.Provider>
            </TweetContext.Provider>
        </div >
    )
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, TweetContext, ThemeContext, UserContext };
