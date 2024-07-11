// src/contexts/UserTweetsContext.jsx
import { createContext, useState } from 'react';
import tweetsData from '../assets/data/tweets';
import userData from '../assets/data/user';

export const UserTweetsContext = createContext();

export const UserTweetsProvider = ({ children }) => {
  const [user] = useState(userData);
  const [tweets, setTweets] = useState(tweetsData);

  return (
    <UserTweetsContext.Provider value={{ user, tweets, setTweets }}>
      {children}
    </UserTweetsContext.Provider>
  );
};
