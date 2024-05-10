import { useEffect, useState, createContext } from "react"
import Header from "./components/Header"
import Tweets from "./components/Tweets"
import RightSide from "./components/RightSide"
import defaultTweets from "./assets/data/tweets.js"
import user from "./assets/data/user.js"

export const MyContext = createContext()

function App() {
	const [tweets, setTweets] = useState(defaultTweets)
	const [theme, setTheme] = useState("light")

	useEffect(() => {
		theme === "light"
			? (document.body.style.backgroundColor = "white")
			: (document.body.style.backgroundColor = "black")
	}, [theme])

	return (
		<MyContext.Provider value={{ tweets, setTweets, theme, setTheme }}>
			<div className='container'>
				<Header user={user} />
				<Tweets user={user} />
				<RightSide />
			</div>
		</MyContext.Provider>
	)
}

export { App }
