// App.jsx
import { useEffect, useState } from 'react';
import AppContext from './AppContext';
import Header from './components/Header';
import Tweets from './components/Tweets';
import RightSide from './components/RightSide';
import defaultTweets from './assets/data/tweets.js';
import user from './assets/data/user.js';
import ThemeContext from './ThemeContext.jsx';


function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    theme === 'light'
      ? (document.body.style.backgroundColor = 'white')
      : (document.body.style.backgroundColor = 'black');
  }, [theme]);

  return (
    <AppContext.Provider value={{ tweets, setTweets, user, theme, setTheme }}>
         <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="container">
        <Header />
        <Tweets />
        <RightSide />
      </div>
      </ThemeContext.Provider>
    </AppContext.Provider>
  );
}

export { App };