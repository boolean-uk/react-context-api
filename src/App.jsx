import { useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'
import { createContext } from 'react'

export const MyContext = createContext()
export const ThemeContext = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    // const [theme, setTheme] = useState('light');
    const [theme, setTheme] = useState(() => {
        const initialTheme = localStorage.getItem('theme')
        console.log("initial theme: ", initialTheme);
        return initialTheme ? initialTheme : 'light';
    })

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <ThemeContext.Provider value={ { theme, setTheme } }>
            <MyContext.Provider value={ { user, tweets, setTweets } }>
                <div className="container">
                    <Header />
                    <Tweets />
                    <RightSide />
                </div>
            </MyContext.Provider>
        </ThemeContext.Provider>
    )
}

export { App}
// export default App;
