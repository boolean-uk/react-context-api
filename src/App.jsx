/* import createContext by adding in createConext */
import { createContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

/* creating new object so that data can be shared between compnents
Have also exported FormContext here*/
const loadedTheme = localStorage.getItem('theme')
export const ThemeCon =createContext(loadedTheme)
export const FormContext = createContext()


function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    /* modified so that default browswer if light*/
    const [theme, setTheme] = useState(loadedTheme || 'light')


   useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme]) 

    return (

     
/* Removed theme from container objects and enclosed FormContent into new provider and moved props into the new provdier to avoid prop drilling*/
    <ThemeCon.Provider value={{ theme, setTheme }}>
        <FormContext.Provider value={ { user, tweets, setTweets } }>
            <div className="container">
                <Header/>
                <Tweets/>
                <RightSide/>
            </div>    
        </FormContext.Provider>
    </ThemeCon.Provider>
        
    )
}


export default App



