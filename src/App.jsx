import { useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'
import { createContext } from 'react'

const MyContext = createContext()
const ThemeContext = createContext()

function App() {

    const [tweets, setTweets] = useState(defaultTweets)
    const storedTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(storedTheme ? storedTheme : 'light');

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])


    return (
        <div className="container">
            <ThemeContext.Provider value = { {theme, setTheme } }>
                <MyContext.Provider value = { {tweets, user } }>
                    <Header/>
                    <Tweets/>
                    <RightSide/>
                </MyContext.Provider>
            </ThemeContext.Provider>
        </div>
    );
    
}

export { MyContext, ThemeContext, App }
