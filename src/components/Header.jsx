import { useContext } from "react";
import { ThemeContext, UserContext } from "../components/AppContext";

export default function Header() {
  const { user } = useContext(UserContext);
  const { theme, toggleTheme, clearSettings } = useContext(ThemeContext);

  const handleCheckChange = () => {
    toggleTheme();
  };

  const handleButtonClick = () => {
    clearSettings();
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
      <div className={theme === "dark" ? "profile-card dark" : "profile-card"}>
        <div className="profile-icon">
          <img src={user.profileImage} />
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
