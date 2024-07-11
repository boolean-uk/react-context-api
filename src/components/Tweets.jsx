import React, { useContext } from 'react';
import { UserTweetsContext } from '../contexts/UserTweetsContext';
import Tweet from './Tweet';

function Tweets() {
  const { tweets } = useContext(UserTweetsContext);

  return (
    <div>
      {tweets.map((tweet, index) => (
        <Tweet key={index} tweet={tweet} />
      ))}
    </div>
  );
}

export default Tweets;
