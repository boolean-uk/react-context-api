import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

const MainContext = createContext();
const ThemeContext = createContext();

function App() {
    const [tweets, setTweets] = useState(defaultTweets);
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        theme === "light"
            ? (document.body.style.backgroundColor = "white")
            : (document.body.style.backgroundColor = "black");
    }, [theme]);

    return (
        <div className="container">
            <MainContext.Provider
                value={{
                    user: user,
                    tweets: tweets,
                    setTweets: setTweets,
                }}
            >
                <ThemeContext.Provider
                    value={{ theme: theme, setTheme: setTheme }}
                >
                    <Header />
                    <Tweets />
                    <RightSide />
                </ThemeContext.Provider>
            </MainContext.Provider>
        </div>
    );
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, MainContext, ThemeContext };
