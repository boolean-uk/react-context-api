import { createContext, useState } from 'react';
import user from '../assets/data/user'
import defaultTweets from '../assets/data/tweets.js'

const ContextAPIContext = createContext();
const ThemeAPIContext = createContext();


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



const ThemeAPIProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
    

    
    return (

    <ThemeAPIContext.Provider
    value={{
        setTheme,
        theme,
    }}>
    
    {children}
    </ThemeAPIContext.Provider>

    )
}

export {ContextAPIProvider, ContextAPIContext, ThemeAPIProvider, ThemeAPIContext}