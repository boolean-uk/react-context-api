// src/components/Header.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function Header() {
  const { theme, setTheme, clearTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className={`header ${theme}`}>
      <div>
        <div className="dark-mode-container">
          <input id="darkMode" type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
          <label htmlFor="darkMode">Enable Dark Mode</label>
        </div>
        <button className="clear-settings-btn" onClick={clearTheme}>Clear Locally Saved Settings</button>
      </div>
      <div className="logo">
        <i className="fa-brands fa-twitter"></i>
      </div>
      <div className="menu-item active">
        <a href="#"><i className="fa-solid fa-house"></i>Home</a>
      </div>
      <div className="menu-item">
        <a href="#"><i className="fa-solid fa-magnifying-glass"></i>Explore</a>
      </div>
      <div className="menu-item">
        <a href="#"><i className="fa-regular fa-bell"></i>Notifications</a>
      </div>
      <div className="menu-item">
        <a href="#"><i className="fa-regular fa-envelope"></i>Messages</a>
      </div>
      <div className="menu-item">
        <a href="#"><i className="fa-solid fa-bars"></i>Lists</a>
      </div>
      <div className="menu-item">
        <a href="#"><i className="fa-regular fa-bookmark"></i>Bookmarks</a>
      </div>
      <div className="menu-item">
        <a href="#"><i className="fa-regular fa-circle-check"></i>Verified</a>
      </div>
      <div className="menu-item">
        <a href="#"><i className="fa-regular fa-user"></i>Profile</a>
      </div>
      <div className="menu-item">
        <a href="#"><i className="fa-solid fa-ellipsis"></i>More</a>
      </div>
      <button className="tweet-btn">Tweet</button>
      <div className="profile-card">
        <div className="profile-icon">
          <img src="../images/doge.jpg" alt="Doge" />
        </div>
        <div className="profile-details">
          <h4>Doge</h4>
          <small>@doge</small>
        </div>
        <div className="action">
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
