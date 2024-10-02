import { useContext } from "react";
import { TwitterContext } from "../App";

export default function Header() {

    const context = useContext(TwitterContext);

    const handleCheckChange = () => {
      if(context.theme === 'dark') {
        context.setTheme('light');
        localStorage.setItem("theme", 'light')
      } else {
        context.setTheme('dark');
        localStorage.setItem("theme", 'dark')
      }
    }

    const handleButtonClick = () => {
      localStorage.clear()
    }

    return (
        <header className={context.theme}>
            <div>
                <div className="dark-mode-container">
                    <input id="darkMode" type="checkbox" checked={context.theme === 'dark'} onChange={handleCheckChange}></input>
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

            <div className={context.theme === 'dark' ? 'profile-card dark' : 'profile-card'}>
                <div className="profile-icon"><img src={context.user.profileImage}/></div>

                <div className="profile-details">
                    <h4>{context.user.name}</h4>
                    <small>{context.user.handle}</small>
                </div>

                <div className="action">
                    <i className="fa-solid fa-ellipsis"></i>
                </div>
            </div>
        </header>
    )
}
