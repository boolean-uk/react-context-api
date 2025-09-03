import { createContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

export const AppContext = createContext();
export const ThemeContext = createContext();

function App() {
    const [tweets, setTweets] = useState(defaultTweets);

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        document.body.style.backgroundColor = theme === 'light' ? 'white' : 'black';
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const clearSettings = () => {
        localStorage.removeItem('theme');
        setTheme('light');
    };

    return (
        <AppContext.Provider value={{ user, tweets, setTweets }}>
            <ThemeContext.Provider value={{ theme, toggleTheme, clearSettings }}>
                <div className="container">
                    <Header />
                    <Tweets />
                    <RightSide />
                </div>
            </ThemeContext.Provider>
        </AppContext.Provider>
    );
}

export { App };
