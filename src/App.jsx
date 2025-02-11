import { createContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

export const AppContext = createContext();
export const ThemeContext = createContext();

function App() {
    const [tweets, setTweets] = useState(defaultTweets)

    const [theme, setTheme] = useState(() => {
        const initialTheme = localStorage.getItem("theme");
        return initialTheme ? initialTheme : "light";
    });

    const toggleTheme = () => {
        setTheme((prevTheme) => {
          const newTheme = prevTheme === "light" ? "dark" : "light";
          localStorage.setItem("theme", newTheme);
          return newTheme;
        });
    };

    const clearLocalSettings = () => {
        localStorage.removeItem("theme");
    }

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, clearLocalSettings }}>
            <AppContext.Provider value={{ user, tweets, setTweets }}>
                <div className="container">
                    <Header />
                    <Tweets />
                    <RightSide />
                </div>
            </AppContext.Provider>
        </ThemeContext.Provider>
    )
}

export { App };
