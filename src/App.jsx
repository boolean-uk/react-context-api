import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const ThemeContext = createContext();
const UserContext = createContext();
const TweetContext = createContext();

function App() {
    const [tweets, setTweets] = useState(defaultTweets)

    const [theme, setTheme] = useState(() => {
        const initialTheme = localStorage.getItem("theme");
        return initialTheme ? initialTheme : "light";
      });
    
      const getTheme = () => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
          setTheme(savedTheme);
        }
      };
    
      const toggleTheme = () => {
        setTheme((prevTheme) => {
          const newTheme = prevTheme === "light" ? "dark" : "light";
          localStorage.setItem("theme", newTheme);
          return newTheme;
        });
      };
    
      useEffect(() => {
        getTheme();
        theme === 'light'
            ? document.body.style.backgroundColor = 'white'
            : document.body.style.backgroundColor = 'black'
      }, [theme]);
    

    return (
        <div className="container">
            <ThemeContext.Provider value={ { theme, toggleTheme }}>
                <UserContext.Provider value={user}>
                    <Header />
                    <TweetContext.Provider value={ { tweets, setTweets } }>
                        <Tweets /> 
                    </TweetContext.Provider>
                </UserContext.Provider>
                <RightSide />
            </ThemeContext.Provider>
        </div>
    )
}

export { App, ThemeContext, UserContext, TweetContext };
