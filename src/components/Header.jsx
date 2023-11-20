import { useContext } from "react";
import { TweetContext, ThemeContext } from "../App"

export default function Header() {
    
    const {theme, setTheme} = useContext(ThemeContext)
    const {user} = useContext(TweetContext)

    const handleChange = (event) => {
      if(event.target.value === "reset") {
        localStorage.removeItem("theme")
        setTheme("light")
        return
      }
      
      if (theme === "dark") { 
        setTheme("light")
      } else {
        localStorage.setItem("theme", "dark")
        setTheme("dark")
      }
      
    }

    return (
        <header className={theme}>
            <div>
                <div className="dark-mode-container">
                    <input id="darkMode" type="checkbox" checked={theme === 'dark'} onChange={(event) => handleChange(event)}></input>
                    <label htmlFor="darkMode">Enable Dark Mode</label>
                </div>
                <div>
                    <button className="clear-settings-btn" value={"reset"} onClick={(event) => handleChange(event)}>Clear Locally Saved Settings</button>
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

            <div className={theme === 'dark' ? 'profile-card dark' : 'profile-card'}>
                <div className="profile-icon"><img src={user.profileImage}/></div>

                <div className="profile-details">
                    <h4>{user.name}</h4>
                    <small>{user.handle}</small>
                </div>

                <div className="action">
                    <i className="fa-solid fa-ellipsis"></i>
                </div>
            </div>
        </header>
    )
}
