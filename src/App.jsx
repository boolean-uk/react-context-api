// src/App.jsx
import React from 'react';
import { UserTweetsProvider } from './contexts/UserTweetsContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Tweets from './components/Tweets';
import CreateTweet from './components/CreateTweet';
import RightSide from './components/RightSide'; 

function App() {
  return (
    <UserTweetsProvider>
      <ThemeProvider>
        <div className="container">
          <Header />
          <main>
            <div className="top-bar">
              <h2 className="title">Home</h2>
            </div>
            <CreateTweet />
            <Tweets />
          </main>
          <RightSide />
        </div>
      </ThemeProvider>
    </UserTweetsProvider>
  );
}

export default App;
