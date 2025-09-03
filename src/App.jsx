import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import defaultUser from './assets/data/user.js'

const DataContext = createContext();
const ThemeContext = createContext();


function App() {
  const [tweets, setTweets] = useState(defaultTweets)
  const [user, setUser] = useState(defaultUser);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.style.backgroundColor = theme === 'light' ? 'white' : 'black';
        console.log('theme changed:', theme);
    }, [theme]);

    return (
        <div className="container">
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <DataContext.Provider value={{ tweets, setTweets, user, setUser }}>
                    <Header />
                    <Tweets />
                    <RightSide />
                </DataContext.Provider>
            </ThemeContext.Provider>
        </div>
    )
}

export { App, DataContext, ThemeContext };
