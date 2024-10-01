import { useEffect, useState, createContext } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";
export const TweetsContext = createContext();
export const UserContext = createContext();
export const ThemeContext = createContext();

function App() {
	const [tweets, setTweets] = useState(defaultTweets);
	const [theme, setTheme] = useState(() => {
		const initialTheme = localStorage.getItem("theme");
		return initialTheme ? initialTheme : "light";
	});

	useEffect(() => {
		theme === "light"
			? (document.body.style.backgroundColor = "white")
			: (document.body.style.backgroundColor = "black");
	}, [theme]);

	return (
		<div className="container">
			<ThemeContext.Provider
				value={{
					theme: theme,
					setTheme: setTheme,
				}}
			>
				<UserContext.Provider
					value={{
						user: user,
					}}
				>
					<TweetsContext.Provider
						value={{
							tweets: tweets,
							setTweets: setTweets,
						}}
					>
						<Tweets />
					</TweetsContext.Provider>
					<Header />
					<RightSide />
				</UserContext.Provider>
			</ThemeContext.Provider>
		</div>
	);
}

export { App };
