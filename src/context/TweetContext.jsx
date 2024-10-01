import { createContext, useContext, useState } from "react"
import defaultTweets from '../assets/data/tweets.js'
import user from '../assets/data/user.js'

const TweetContext = createContext()

export function TweetProvider({ children }) {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState('light')


    return (
        <TweetContext.Provider value={{ tweets, setTweets, user, theme, setTheme }}>
            {children}
        </TweetContext.Provider>
    )
}

export function useTweets() {
    return useContext(TweetContext)
}
