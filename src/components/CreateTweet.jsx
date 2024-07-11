// src/components/CreateTweet.jsx
import React, { useContext, useState } from 'react';
import { UserTweetsContext } from '../contexts/UserTweetsContext';

function CreateTweet() {
  const { tweets, setTweets } = useContext(UserTweetsContext);
  const [newTweet, setNewTweet] = useState('');

  const handleCreateTweet = (event) => {
    event.preventDefault();
    if (newTweet.trim()) {
      setTweets([
        ...tweets,
        {
          profileImage: '../images/doge.jpg',
          name: 'Doge',
          handle: '@doge',
          date: 'now',
          content: newTweet,
          commentCount: 0,
          retweetCount: 0,
          heartCount: 0,
          analyticsCount: 0,
        },
      ]);
      setNewTweet('');
    }
  };

  return (
    <div className="create-tweet">
      <form onSubmit={handleCreateTweet}>
        <div className="avatar-section">
          <img className="profile-icon" src="../images/doge.jpg" alt="Doge" />
        </div>
        <div className="textarea-section">
          <textarea
            className="content"
            value={newTweet}
            onChange={(e) => setNewTweet(e.target.value)}
            placeholder="What is happening?!"
          />
        </div>
        <div className="actions-section">
          <div className="actions">
            <i className="fa-regular fa-image action-icon"></i>
            <i className="fa-solid fa-list action-icon"></i>
            <i className="fa-regular fa-face-smile action-icon"></i>
            <i className="fa-regular fa-calendar action-icon"></i>
            <i className="fa-solid fa-location-dot action-icon"></i>
          </div>
          <button type="submit" disabled={!newTweet.trim()} className="tweet-btn">
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTweet;
