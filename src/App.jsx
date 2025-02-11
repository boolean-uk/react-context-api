import { useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js' 
import { createContext } from 'react'
import { ThemeContext } from './Contexts.jsx'
import { UserContext } from './Contexts.jsx'
import { TweetsContext } from './Contexts.jsx'

function App() {
    const [CurrentUser, setUser] = useState(user);
    const [tweets, setTweets] = useState(defaultTweets)
    //const [theme, setTheme] = useState('light');
    const [theme, setTheme] = useState(()=> {
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
    console.log("theme", theme);
    getTheme();
  }, [theme]);

 

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <UserContext.Provider value={{CurrentUser, setUser }}>
                <TweetsContext.Provider value={{tweets , setTweets}}>                  
                    <div className="container">
                        <Header  />
                        <Tweets   />
                        <RightSide  />
                    </div>
                </TweetsContext.Provider>
            </UserContext.Provider>
        </ThemeContext.Provider>

    )
}

export { App };
