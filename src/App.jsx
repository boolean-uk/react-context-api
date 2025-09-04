import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tweets from './components/Tweets';
import RightSide from './components/RightSide';
import { TweetsUserProvider } from './components/TweetsUserProvider';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.body.style.backgroundColor = theme === 'light' ? 'white' : 'black';
  }, [theme]);

  return (
    <TweetsUserProvider>
      <div className="container">
        <Header theme={theme} setTheme={setTheme} />
        <Tweets theme={theme} />
        <RightSide theme={theme} />
      </div>
    </TweetsUserProvider>
  );
}

export { App };
