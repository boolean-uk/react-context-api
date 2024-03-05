import { createContext, useState } from 'react';
import user from '../assets/data/user'
import defaultTweets from '../assets/data/tweets.js'

const ContextAPIContext = createContext();



const ContextAPIProvider = ({children}) => {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState('light');
    

    
    return (

    <ContextAPIContext.Provider
    value={{
        tweets,
        setTheme,
        setTweets,
        theme,
        user,
    }}>
    
    {children}
    </ContextAPIContext.Provider>

    )
}


export {ContextAPIProvider, ContextAPIContext}