import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const UserContext = createContext()
const PostsContext = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <PostsContext.Provider value={{ user, tweets, setTweets }}>
        <UserContext.Provider value={{ theme, setTheme }}>
        <div className="container">
            <Header />
            <Tweets />
            <RightSide />
        </div>
        </UserContext.Provider>
        </PostsContext.Provider>
    )
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, PostsContext };
