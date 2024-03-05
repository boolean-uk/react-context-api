import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'
export const UserContext = createContext();
export const TweetContext = createContext();

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(() => {
        const initialTheme = localStorage.getItem("theme");
        console.log("first set");
        return initialTheme ? initialTheme : "light";
    });


    useEffect(() => {
        console.log("theme", theme);
        theme === 'light'
            ? document.body.style.backgroundColor = 'white'
            : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <div className="container">
            <UserContext.Provider value={{ user: user, theme: theme, setTheme: setTheme }}>
                <Header />
                <TweetContext.Provider value={{ tweets: tweets, setTweets: setTweets }}>
                    <Tweets />
                </TweetContext.Provider> 
            <RightSide />
            </UserContext.Provider>
        </div>
    )
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App };
