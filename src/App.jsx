import { createContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'


const AppContext = createContext()
const ThemeContext = createContext()
function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <AppContext.Provider
            value={{
                user: user,
                tweets: tweets,
                setTweets: setTweets,
                theme: theme,
                setTheme: setTheme, 
            }}
        >
         <ThemeContext.Provider value={{
            theme: theme, setTheme: setTheme }}>   

       
           <div className="container">
            <Header/>
            <Tweets/>
            <RightSide/>
           </div>
         </ThemeContext.Provider>
        </AppContext.Provider>
    );
}

export { App, AppContext, ThemeContext };
