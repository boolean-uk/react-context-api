import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const PostContext = createContext()
const ThemeContext = createContext()


function getThemeState () {
    const mode = localStorage.getItem("mode")
    return (mode) ? mode : "light"
}

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(getThemeState);

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <div className="container">
            <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
            <RightSide/>
            <PostContext.Provider value={{user: user, tweets: tweets, setTweets: setTweets}}>
                <Header/>
                <Tweets/>
            </PostContext.Provider>
            </ThemeContext.Provider>
            {/* <Header user={user} theme={theme} setTheme={setTheme} />
            <Tweets tweets={tweets} setTweets={setTweets} user={user} theme={theme}  />
            <RightSide theme={theme} /> */}
        </div>
    )
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, PostContext, ThemeContext };
