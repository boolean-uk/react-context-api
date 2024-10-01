import CreateTweet from "./CreateTweet";
import Tweet from "./Tweet";
import { TweetsContext } from "../App";
import { UserContext } from "../App";
import { ThemeContext } from "../App";
import { useContext } from "react";

export default function Tweets() {
	const { tweets, setTweets } = useContext(TweetsContext);
	const { user } = useContext(UserContext);
	const { theme } = useContext(ThemeContext);

	return (
		<main>
			<div className={theme === "dark" ? "top-bar dark" : "top-bar"}>
				<h2 className="title">Home</h2>
			</div>

			<CreateTweet />

			<div className="show-more-tweets">
				<p>Show 35 Tweets</p>
			</div>

			{tweets.map((tweet, index) => (
				<Tweet
					tweet={tweet}
					key={index}
				/>
			))}
		</main>
	);
}
