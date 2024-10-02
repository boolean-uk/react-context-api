import { useEffect, useState } from 'react';
import Header from './components/Header';
import Tweets from './components/Tweets';
import RightSide from './components/RightSide';
import ContextProviders from './components/Providers.jsx';
import defaultTweets from './assets/data/tweets.js';
import user from './assets/data/user.js';

function App() {
	const [tweets, setTweets] = useState(defaultTweets);
	const [theme, setTheme] = useState(() => {
		const initialTheme = localStorage.getItem('theme');
		return initialTheme ? initialTheme : 'light';
	});

	useEffect(() => {
		theme === 'light'
			? (document.body.style.backgroundColor = 'white')
			: (document.body.style.backgroundColor = 'black');
	}, [theme]);

	return (
		<div className="container">
			<ContextProviders
				theme={theme}
				setTheme={setTheme}
				user={user}
				tweets={tweets}
				setTweets={setTweets}
			>
				<Header />
				<Tweets />
				<RightSide />
			</ContextProviders>
		</div>
	);
}

export { App };
