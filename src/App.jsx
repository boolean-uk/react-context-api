import { useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'
import UserContext from './context/UserContext'
import TweetsContext from './context/TweetsContext.js'

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <TweetsContext.Provider value={tweets}>
        <UserContext.Provider value={user}>
        <div className="container">
            <Header theme={theme} setTheme={setTheme} />
            <Tweets setTweets={setTweets} theme={theme}  />
            <RightSide theme={theme} />
        </div>
        </UserContext.Provider>
        </TweetsContext.Provider>
    )
}

export { App };
