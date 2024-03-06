import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const MyContext = createContext();
const MyTheme = createContext();

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (localStorage.getItem("theme")) {
            setTheme(localStorage.getItem("theme"));
          }
          if (theme === "light") {
            (document.body.style.backgroundColor = "white")
          } else {
            (document.body.style.backgroundColor = "black")
          }
        }, [theme]);

    return (
        <div className="container">
            <MyTheme.Provider value={{theme, setTheme}}>
                <MyContext.Provider value={{user, tweets, setTweets}}>
                    <Header/>
                    <Tweets />
                    <RightSide /> 
                </MyContext.Provider>
            </MyTheme.Provider>
        </div>
    )
}
//<Header user={user} theme={theme} setTheme={setTheme} />
// <Tweets tweets={tweets} setTweets={setTweets} user={user} theme={theme}  />
// <RightSide theme={theme} /> 

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { MyTheme, MyContext ,App };
