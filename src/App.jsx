import { useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

//new imports
import { createContext } from 'react'

export const tweetsContext = createContext();
export const themeContext = createContext();

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(() => {
        const initialTheme = localStorage.getItem('theme');
        return initialTheme ? initialTheme : 'light';
    });

    const getTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        {savedTheme && setTheme(savedTheme)}
    }

    
    useEffect(() => {
        theme === 'light'
        ? document.body.style.backgroundColor = 'white'
        : document.body.style.backgroundColor = 'black'
    }, [theme])
    

    return (
        <themeContext.Provider value={{theme, setTheme}}>
        <tweetsContext.Provider value={{tweets, setTweets, user}}>
            <div className="container">
                    <Header />
                    <Tweets />
                    <RightSide />
            </div>
        </tweetsContext.Provider>  
        </themeContext.Provider>    
    )
}

export { App };
