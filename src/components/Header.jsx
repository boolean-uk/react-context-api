import { ThemeContext } from "../App";
import { TweetsContext } from "../App";
import { useContext } from "react";

export default function Header() {
    const themeContext = useContext(ThemeContext)
    const tweetsContext = useContext(TweetsContext)

    

    const handleCheckChange = () => {
      if(themeContext.theme === 'dark') {
        localStorage.setItem("theme", "light")
        themeContext.setTheme('light');
      } else {
        localStorage.setItem("theme", "dark")
        themeContext.setTheme('dark');
      }
    }

    const handleButtonClick = () => {
      localStorage.removeItem("theme")
      themeContext.setTheme('light');
    }

    return (
        <header className={themeContext.theme}>
            <div>
                <div className="dark-mode-container">
                    <input id="darkMode" type="checkbox" checked={themeContext.theme === 'dark'} onChange={handleCheckChange}></input>
                    <label htmlFor="darkMode">Enable Dark Mode</label>
                </div>
                <div>
                    <button className="clear-settings-btn" onClick={handleButtonClick}>Clear Locally Saved Settings</button>
                </div>
            </div>
            <div className="logo">
                <i className="fa-brands fa-twitter"></i>
            </div>

            <div className="menu-item active">
                <a href="#">
                    <i className="fa-solid fa-house"></i>
                    Home
                </a>
            </div>

            <div className="menu-item">
                <a href="#">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    Explore
                </a>
            </div>

            <div className="menu-item">
                <a href="#">
                    <i className="fa-regular fa-bell"></i>
                    Notifications
                </a>
            </div>

            <div className="menu-item">
                <a href="#">
                    <i className="fa-regular fa-envelope"></i>
                    Messages
                </a>
            </div>

            <div className="menu-item">
                <a href="#">
                    <i className="fa-solid fa-bars"></i>
                    Lists
                </a>
            </div>

            <div className="menu-item">
                <a href="#">
                    <i className="fa-regular fa-bookmark"></i>
                    Bookmarks
                </a>
            </div>

            <div className="menu-item">
                <a href="#">
                    <i className="fa-regular fa-circle-check"></i>
                    Verified
                </a>
            </div>

            <div className="menu-item">
                <a href="#">
                    <i className="fa-regular fa-user"></i>
                    Profile
                </a>
            </div>

            <div className="menu-item">
                <a href="#">
                    <i className="fa-solid fa-ellipsis"></i>
                    More
                </a>
            </div>

            <button className="tweet-btn">Tweet</button>

            <div className={themeContext.theme === 'dark' ? 'profile-card dark' : 'profile-card'}>
                <div className="profile-icon"><img src={tweetsContext.user.profileImage}/></div>

                <div className="profile-details">
                    <h4>{tweetsContext.user.name}</h4>
                    <small>{tweetsContext.user.handle}</small>
                </div>

                <div className="action">
                    <i className="fa-solid fa-ellipsis"></i>
                </div>
            </div>
        </header>
    )
}
