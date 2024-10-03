// App.jsx
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Tweets from './components/Tweets';
import RightSide from './components/RightSide';
import defaultTweets from './assets/data/tweets.js';
import userData from './assets/data/user.js';
import { ThemeContext, UserContext } from './components/context'; 

function App() {
    const [tweets, setTweets] = useState(defaultTweets);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.body.style.backgroundColor = theme === 'light' ? 'white' : 'black';
    }, [theme]);

    return (
        <UserContext.Provider value={userData}>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <div className="container">
                    <Header />
                    <Tweets tweets={tweets} setTweets={setTweets} />
                    <RightSide />
                </div>
            </ThemeContext.Provider>
        </UserContext.Provider>
    );
}

export { App };
