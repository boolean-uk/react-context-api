import { useContext } from "react";
import { StorageContext, ThemeContext } from "../App";

export default function Header() {
    const _storage = useContext(StorageContext)
    const _theme = useContext(ThemeContext)

    const handleCheckChange = () => {
        _theme.theme = _theme.theme === 'dark' ? 'light' : 'dark'
        _theme.setTheme.setTheme(_theme.theme)
        localStorage.setItem("theme_mode", _theme.theme)
    }

    const handleButtonClick = () => {
      console.log("CLICK!");
    }

    return (
        <header className={_theme.theme}>
            <div>
                <div className="dark-mode-container">
                    <input id="darkMode" type="checkbox" checked={_theme.theme === 'dark'} onChange={handleCheckChange}></input>
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

            <div className={_theme.theme === 'dark' ? 'profile-card dark' : 'profile-card'}>
                <div className="profile-icon"><img src={_storage.user.profileImage}/></div>

                <div className="profile-details">
                    <h4>{_storage.user.name}</h4>
                    <small>{_storage.user.handle}</small>
                </div>

                <div className="action">
                    <i className="fa-solid fa-ellipsis"></i>
                </div>
            </div>
        </header>
    )
}
