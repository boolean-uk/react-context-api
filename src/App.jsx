import { createContext, useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

export const TweetContext = createContext(defaultTweets);
export const ThemeContext = createContext("light");
export const UserContext = createContext(user);

function App() {
	const [tweets, setTweets] = useState(useContext(TweetContext));
	const [theme, setTheme] = useState(useContext(ThemeContext));

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
