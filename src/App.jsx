import { useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'
import { createContext } from 'react'

const TweetContext = createContext()
const ThemeContext = createContext()

function App() {

    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState( localStorage.getItem("lastTheme") ? localStorage.getItem("lastTheme") : "light");
   

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <div className="container">
            <TweetContext.Provider value={{tweets, user, setTweets}}>
                <ThemeContext.Provider value={{theme, setTheme}}>
                    <Header theme={theme} setTheme={setTheme}/>
                    <Tweets theme={theme}  />
                    <RightSide theme={theme} />
                </ThemeContext.Provider>
            </TweetContext.Provider> 
        </div>
    )
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, TweetContext, ThemeContext};
