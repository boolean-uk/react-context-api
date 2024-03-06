import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'


const ThemeContext = createContext();
const TwitterContext = createContext();

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(()=>{
        const initialTheme = localStorage.getItem("theme");
        return initialTheme ? initialTheme : "light";
      });

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <ThemeContext.Provider value={{
            theme: theme, 
            setTheme: setTheme}}>
            <TwitterContext.Provider value={{ 
                tweets: tweets,
                setTweets: setTweets,
                user: user}}>

                <section className='container'>
                    <Header></Header>
                    <Tweets></Tweets>
                    <RightSide></RightSide>
                </section>
            </TwitterContext.Provider>
        </ThemeContext.Provider>
    )
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { ThemeContext, TwitterContext, App };
