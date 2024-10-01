import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const MyContext = createContext();

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(localStorage.getItem("key"));

    useEffect(() => {
        if(localStorage.length === 0) {
            document.body.style.backgroundColor = 'white'
        } else {
        localStorage.getItem("key")  === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
        }
    }, [theme])

    return (
        <div className="container">
            <MyContext.Provider value={{theme, user, tweets, setTweets, setTheme}}>
            <Header  />
            <Tweets />
            <RightSide />
            </MyContext.Provider>
        </div>
    )
}

export { App, MyContext };
