import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

export const TwitterContext = createContext()
export function App() {
    const [tweets, setTweets] = useState(defaultTweets)

    const [theme, toggleTheme] = useState(() => {
        const initialTheme = localStorage.getItem("theme");
        console.log("first set");
        return initialTheme ? initialTheme : "light";
    });

    const setTheme = () => {
        toggleTheme((prevTheme) => {
            const newTheme = prevTheme === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    };

    useEffect(() => {
        theme === 'light'
            ? document.body.style.backgroundColor = 'white'
            : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <TwitterContext.Provider value={
            {
                tweets: tweets,
                setTweets: setTweets,
                theme: theme,
                setTheme: setTheme,
                user: user
            }}>
            <div className="container">
                <Header />
                <Tweets />
                <RightSide />
            </div>
        </TwitterContext.Provider>
    )
}
