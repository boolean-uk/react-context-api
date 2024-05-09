/* import createContext by adding in createConext */
import { createContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

/* creating new object so that data can be shared between compnents*/
const FormContext = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (

        /*wrapping components so that decendants can access the state (Theme) with in the <FormContect.prodvider> and settting the props "theme" for relvancy. 
        This avoids placing too much state being used.*/

        <FormContext.Provider value={ { user, tweets, setTweets, theme, setTheme } }>
            <div className="container">
                
                <Header theme={theme} setTheme={setTheme} />
                <Tweets  theme={theme} />
                <RightSide  theme={theme} />

            </div>    

        </FormContext.Provider>
        
        /* 
        <div className="container">
            <Header user={user} theme={theme} setTheme={setTheme} />
            <Tweets tweets={tweets} setTweets={setTweets} user={user} theme={theme}  />
            <RightSide theme={theme} />
        </div>*/
    )
}

/*exporting FormContext object */
export { App, FormContext }



