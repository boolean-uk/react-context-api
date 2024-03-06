import React, { useEffect, useState, createContext } from 'react';
import Header from './components/Header';
import Tweets from './components/Tweets';
import RightSide from './components/RightSide';
import defaultTweets from './assets/data/tweets.js';
import user from './assets/data/user.js';

const UserContext = createContext();
const TweetsContext = createContext();
const ThemeContext = createContext();

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const initTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(initTheme);

  useEffect(() => {
    theme === 'light'
      ? document.body.classList.remove('dark-theme')
      : document.body.classList.add('dark-theme');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="container">
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <UserContext.Provider value={user}>
          <TweetsContext.Provider value={{ tweets, setTweets }}>
            <Header />
            <Tweets />
            <RightSide />
          </TweetsContext.Provider>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export { App, UserContext, TweetsContext, ThemeContext };
