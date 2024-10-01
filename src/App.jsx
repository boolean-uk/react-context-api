import { useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'
import { createContext } from 'react'

const NoContext=createContext()
const ConTheme=createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <div className="container">
            
            <NoContext.Provider value={{tweets, setTweets, user}}>
                <ConTheme.Provider value={{theme, setTheme}}>
                    <Header />
                    <Tweets  />
                    <RightSide />
                </ConTheme.Provider>
            </NoContext.Provider>
            
            
        </div>
    )
}

export { ConTheme, NoContext, App };
