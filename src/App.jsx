import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const MyContext = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    useEffect(() => {
        if(localStorage.getItem("theme")==='dark'){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
    }, [theme])

    return (
        <div className="container">
            <MyContext.Provider value = {{user, theme, setTheme, setTweets, tweets}}>
            <Header  />
            <Tweets   />
            <RightSide/>
            </MyContext.Provider>
        </div>
    )
}

export { App , MyContext};
