import React, { useState } from "react";
import defaultTweets from "../assets/data/tweets";
const TweetsCtx = React.createContext({
	tweets: [],
	newTweet: () => {},
});

export const TweetsCtxProvider = (props) => {
	const [tweets, setTweets] = useState(defaultTweets);

	function newTweet(newTweet) {
		setTweets((prev) => [newTweet, ...prev]);
	}

	return (
		<TweetsCtx.Provider value={{ tweets, newTweet }}>
			{props.children}
		</TweetsCtx.Provider>
	);
};

export default TweetsCtx;
