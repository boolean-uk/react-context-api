import React, { useState, useContext } from "react";
import { TweetContext, ThemeContext } from "../App";

export default function CreateTweet() {
    const { user, tweets, setTweets } = useContext(TweetContext);
    const { theme } = useContext(ThemeContext);
    const [content, setContent] = useState("");

  const addTweet = (e) => {
    e.preventDefault();
    setTweets([
      {
        ...user,
        date: "1m",
        content,
        commentCount: 0,
        retweetCount: 0,
        heartCount: 0,
        analyticsCount: 0,
      },
      ...tweets,
    ]);
  };

  return (
    <div className={theme === "dark" ? "create-tweet dark" : "create-tweet"}>
      <form onSubmit={addTweet}>
        <div className="avatar-section">
          <div className="profile-icon">
          <div className="profile-icon"><img src={user.profileImage} alt={user.name} /></div>
          </div>
        </div>

        <div className="textarea-section">
          <textarea
            className="content"
            type="text"
            placeholder="What is happening?!"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        <div></div>

        <div className="actions-section">
          <div className="actions">
            <i className="fa-regular fa-image action-icon"></i>
            <i className="fa-solid fa-list action-icon"></i>
            <i className="fa-regular fa-face-smile action-icon"></i>
            <i className="fa-regular fa-calendar action-icon"></i>
            <i className="fa-solid fa-location-dot action-icon"></i>
          </div>

          <button
            type="submit"
            disabled={content.length < 1}
            className="tweet-btn"
          >
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
}
