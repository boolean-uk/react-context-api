import { createContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const AppContext = createContext()

function App() {
  const [tweets, setTweets] = useState(defaultTweets)
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    // On start, read the theme from storage
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    theme === 'light'
    ? document.body.style.backgroundColor = 'white'
    : document.body.style.backgroundColor = 'black'
  }, [theme])

  return (
    <AppContext.Provider value={{user, theme, setTheme, tweets, setTweets}}>
      <div className="container">
        <Header />
        <Tweets />
        <RightSide />
      </div>
    </AppContext.Provider>
  )
}

export { App, AppContext };
