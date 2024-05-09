import { useContext, useEffect } from "react";
import Header from "./components/Header";
import RightSide from "./components/RightSide";
import Tweets from "./components/Tweets";
import ThemeCtx from "./stores/theme-ctx.jsx";

function App() {
	const { theme } = useContext(ThemeCtx);
	useEffect(() => {
		theme === "light"
			? (document.body.style.backgroundColor = "white")
			: (document.body.style.backgroundColor = "black");
	}, [theme]);

	return (
		<div className="container">
			<Header />
			<Tweets />
			<RightSide />
		</div>
	);
}

export { App };
