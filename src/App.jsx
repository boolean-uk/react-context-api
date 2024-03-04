import { createContext, useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

export const TweetContext = createContext(defaultTweets);
export const ThemeContext = createContext({ theme: "light", setTheme: null });
export const UserContext = createContext(user);

const loadLocalStorageTheme = () => {
	const theme = localStorage.getItem("theme");

	if (!theme) {
		localStorage.setItem("theme", "light");
	}

	if (!(theme === "dark" || theme === "light")) {
		localStorage.setItem("theme", "light");
	}

	return theme;
};

function App() {
	const [tweets, setTweets] = useState(useContext(TweetContext));
	const [theme, setTheme] = useState(loadLocalStorageTheme());

	// ThemeContext = { theme: theme, setTheme: setTheme };

	useEffect(() => {
		theme === "light"
			? (document.body.style.backgroundColor = "white")
			: (document.body.style.backgroundColor = "black");
	}, [theme]);

	return (
		<div className="container">
			<UserContext.Provider value={{ user }}>
				<ThemeContext.Provider value={{ theme, setTheme }}>
					<Header />
					<TweetContext.Provider value={{ tweets, setTweets }}>
						<Tweets />
					</TweetContext.Provider>
					<RightSide />
				</ThemeContext.Provider>
			</UserContext.Provider>
		</div>
	);
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App };
