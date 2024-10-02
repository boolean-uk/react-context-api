import { useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'
import { createContext } from 'react'

export const TweetContext = createContext();
export const ThemeContext = createContext();
export const UserContext = createContext();

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    console.log(tweets)
    const [theme, setTheme] = useState(() => {
        const initialTheme = localStorage.getItem("theme");
        console.log("first set");
        return initialTheme ? initialTheme : "light";
      });

      

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <>

        <UserContext.Provider value={{user: user}}>
        <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme}}>
        <TweetContext.Provider value={{ tweets: tweets, setTweets: setTweets }}>

            <div className='container'>
                <Header />
                <Tweets />
                <RightSide />
            </div>


        </TweetContext.Provider>



        </ThemeContext.Provider>


        </UserContext.Provider>
    
            
        
        
        </>
        
    )
}

export { App };
