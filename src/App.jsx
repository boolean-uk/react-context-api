import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'
import { createContext, useEffect, useState } from 'react'


export const MyContext = createContext()
export const ThemeContext = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
            <MyContext.Provider value={{user: user, tweets: tweets, setTweets: setTweets}}> {/* Wrap the components with UserProvider */}
                    <div className="container">
                        <Header />
                        <Tweets />
                        <RightSide />
                    </div>
                </MyContext.Provider>
        </ThemeContext.Provider>
       
 
    )
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App };
