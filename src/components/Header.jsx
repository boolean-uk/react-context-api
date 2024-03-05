import { TweetContext, ThemeContext } from '../App'
import { useContext, useEffect, useState} from 'react'


export default function Header() {
    const { user } = useContext(TweetContext)
    const { theme, setTheme } = useContext(ThemeContext)
    const [shouldStoreTheme, setShouldStoreTheme] = useState(true); // To control when the storage should be done!
    

    // METHOD 1:

    // useEffect(() => {
    //     // Retrieve theme preference from localStorage
    //     const initializeTheme = localStorage.getItem("theme");
    //     if (initializeTheme) {
    //       setTheme(initializeTheme);
    //     }
    //   }, []); // Empty dependency array ensures this effect runs only once on component mount

      
    // const handleCheckChange = () => {
    //   if(theme === 'dark') {
    //     setTheme('light');
    //     localStorage.setItem("theme", 'light')
    //     localStorage.setItem("TEST", 6666)
    //     // else: if theme = light or null
    //   } else {
    //     setTheme('dark');
    //     localStorage.setItem("theme", 'dark')
    //     localStorage.setItem("TEST", 1111)
    //   }
    // }

    // METHOD 2:
     useEffect(() => {
        if (shouldStoreTheme) {
            localStorage.setItem("theme", theme)
            localStorage.setItem("TEST", 1111)
        }
     }, [theme]);


    const handleCheckChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
        setShouldStoreTheme(true)
    }

    const handleButtonClick = () => {
      console.log("CLICK!");
      localStorage.removeItem("theme")
      setShouldStoreTheme(false)
      setTheme('light')
    }

    return (
        <header className={theme}>
            <div>
                <div className="dark-mode-container">
                    {/* Checkbox for toggling theme: */}
                    <input id="darkMode" type="checkbox" checked={theme === 'dark'} onChange={handleCheckChange}></input>
                    <label htmlFor="darkMode">Enable Dark Mode</label>
                </div>
                <div>
                    <button className="clear-settings-btn" onClick={handleButtonClick}>Clear Locally Saved Settings</button>
                </div>
            </div>

            {/* The lines below is example of good side bar!! */}
            <div className="logo">
                {/* A way to include logo.. */}
                <i className="fa-brands fa-twitter"></i>
            </div>

            <div className="menu-item active">
                {/* a => can set navigate.. */}
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
