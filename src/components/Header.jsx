import { ContextData, ContextTheme } from "../App";
import { useContext } from "react";


export default function Header() {
    const contextTheme = useContext(ContextTheme)
    const contextData = useContext(ContextData)

    const handleCheckChange = () => {
        if(contextTheme.theme === 'dark') {
            contextTheme.setTheme('light');
            localStorage.setItem("theme", 'light') // Tried setting it to contexTheme.theme outside the if statement, but i seem to be saving the opposite value of what it currently is 
        } else {
            contextTheme.setTheme('dark');
            localStorage.setItem("theme", 'dark')
        }
    }

    const handleButtonClick = () => {
      localStorage.removeItem("theme")
    }

    return (
        <header className={contextTheme.theme}>
            <div>
                <div className="dark-mode-container">
                    <input id="darkMode" type="checkbox" checked={contextTheme.theme === 'dark'} onChange={handleCheckChange}></input>
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

            <div className={contextTheme.theme === 'dark' ? 'profile-card dark' : 'profile-card'}>
                <div className="profile-icon"><img src={contextData.user.profileImage}/></div>

                <div className="profile-details">
                    <h4>{contextData.user.name}</h4>
                    <small>{contextData.user.handle}</small>
                </div>

                <div className="action">
                    <i className="fa-solid fa-ellipsis"></i>
                </div>
            </div>
        </header>
    )
}
