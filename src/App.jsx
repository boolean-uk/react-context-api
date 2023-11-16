import { createContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const UserContex = createContext()
const TweetsContext = createContext()



function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState('light');


    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (

        <div className="container">
            <UserContex.Provider value={{ user }}>
                <TweetsContext.Provider value={{ tweets, setTweets }}>
                    <div className="app">
                        <Header theme={theme} setTheme={setTheme} />
                        <Tweets theme={theme}/>
                        <RightSide theme={theme}/>
                    </div>
                </TweetsContext.Provider>
            </UserContex.Provider>
        </div>
    )
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App , UserContex, TweetsContext};
