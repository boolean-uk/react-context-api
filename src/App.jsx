import { useEffect, useState,  createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const GlobalContext = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(() => {
        const initialTheme = localStorage.getItem("theme");
        return initialTheme ? initialTheme : "light";
      });

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

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
        console.log("theme", theme);
        getTheme();
      }, [theme]);

    return (
        <GlobalContext.Provider value={{tweets, setTweets, theme, setTheme, toggleTheme, user}}>
            <div className="container">
                <Header />
                <Tweets />
                <RightSide />
            </div>
        </GlobalContext.Provider>
    )
}

export { App, GlobalContext };
