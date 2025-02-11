import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'
export const DataContext = createContext();
export const ThemeContext = createContext();
export const DEFAULT_THEME = 'light';
function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(DEFAULT_THEME);

    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        localTheme && setTheme(localTheme);
        theme === DEFAULT_THEME
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
        <DataContext.Provider value={{ user, tweets, setTweets }}>
        <div className="container">
            <Header />
            <Tweets  />
            <RightSide />
        </div>
        </DataContext.Provider>
        </ThemeContext.Provider>
    )
}

export { App };
