import { useContext } from "react";
import CreateTweet from "./CreateTweet";
import Tweet from "./Tweet";
import TweetsCtx from "../stores/tweets-ctx";
import ThemeCtx from "../stores/theme-ctx";
import AuthCtx from "../stores/auth-ctx";

export default function Tweets() {
	const { tweets } = useContext(TweetsCtx);
	const { theme } = useContext(ThemeCtx);
	const { user } = useContext(AuthCtx);
	return (
		<main>
			<div className={theme === "dark" ? "top-bar dark" : "top-bar"}>
				<h2 className="title">Home</h2>
			</div>

			<CreateTweet user={user} />

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
