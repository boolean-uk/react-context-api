import {createContext, useEffect, useState} from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

export const UserContext = createContext();
export const ThemeContext = createContext();

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        }
        else {
            setTheme("light");
        }
        
        theme === 'light'
            ? document.body.style.backgroundColor = 'white'
            : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <UserContext.Provider value={{tweets, setTweets, user}}>
            <ThemeContext.Provider value={{theme, setTheme}}>
                <div className="container">
                    <Header/>
                    <Tweets/>
                    <RightSide/>
                </div>
            </ThemeContext.Provider>
        </UserContext.Provider>
    )
}

export {App};
