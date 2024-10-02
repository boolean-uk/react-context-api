import { TweetsContext, UserContext, ThemeContext } from '../context.jsx';

function ContextProviders({
	children,
	theme,
	setTheme,
	user,
	tweets,
	setTweets,
}) {
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<UserContext.Provider value={{ user }}>
				<TweetsContext.Provider value={{ tweets, setTweets }}>
					{children}
				</TweetsContext.Provider>
			</UserContext.Provider>
		</ThemeContext.Provider>
	);
}

export default ContextProviders;
