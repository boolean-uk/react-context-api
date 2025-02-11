import { createContext, useContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

export const DisplayContext = createContext();
export const UserContext = createContext();

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(localStorage.getItem("display") ?? 'light');

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <DisplayContext.Provider value={{theme, setTheme}} >
            <UserContext.Provider value = {{tweets, setTweets, user}}>
                <div className="container">
                    <Header />
                    <Tweets />
                    <RightSide />
                </div>
            </UserContext.Provider>
        </DisplayContext.Provider>
    )
}

export { App };
