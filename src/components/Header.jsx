import { useContext } from "react";
import { ThemeContext, UserContext } from "../App.jsx";

export default function Header() {
  const user = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleCheckChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleButtonClick = () => {
    localStorage.removeItem("theme");
    setTheme("light");
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

      {/* Rest of the header content */}
    </header>
  );
}
