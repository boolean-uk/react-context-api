import React, { useContext } from "react";
import { AppContext } from "../App";

export default function Header() {
  const { theme, setTheme, user } = useContext(AppContext);

  const handleCheckChange = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  const handleButtonClick = () => {
    localStorage.clear();
    location.reload();
  };

  return (
    <header className={theme}>
      <div>
        <div className="dark-mode-container">
          <input
            id="darkMode"
            type="checkbox"
            checked={theme === "dark"}
            onChange={handleCheckChange}
          ></input>
          <label htmlFor="darkMode">Enable Dark Mode</label>
        </div>
        <div>
          <button className="clear-settings-btn" onClick={handleButtonClick}>
            Clear Locally Saved Settings
          </button>
        </div>
      </div>
      <div className="logo">
        <i className="fa-brands fa-twitter"></i>
      </div>

      {/* ... (rest of your code) ... */}

      <button className="tweet-btn">Tweet</button>

      <div className={theme === "dark" ? "profile-card dark" : "profile-card"}>
        <div className="profile-icon">
          <img src={user.profileImage} alt="User Profile" />
        </div>

        <div className="profile-details">
          <h4>{user.name}</h4>
          <small>{user.handle}</small>
        </div>

        <div className="action">
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>
    </header>
  );
}
