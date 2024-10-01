import imgElon from "../assets/images/elon.jpg";
import imgZuck from "../assets/images/zuck.jpg";
import { ThemeContext } from "../App";
import { useContext } from "react";

export default function RightSide() {
	const { theme } = useContext(ThemeContext);

	return (
		<aside>
			<div
				className={
					theme === "dark" ? "search-section dark" : "search-section"
				}
			>
				<i className="fa-solid fa-magnifying-glass search-icon"></i>
				<input
					className="search"
					type="text"
					placeholder="Search Twitter"
				/>
			</div>

			<div className={theme === "dark" ? "widget dark" : "widget"}>
				<div className="widget-grid">
					<h1>Get Verified</h1>
					<h3>Subscribe to unlock nothing.</h3>

					<button className="verify-btn">Get Verified</button>
				</div>
			</div>

			<div className={theme === "dark" ? "widget dark" : "widget"}>
				<h1>What's happening</h1>

				<div className="news-block">
					<div className="content">
						<small>Entertainment · Trending</small>
						<h4>Elon Musk</h4>
						<small>14.5k Tweets</small>
					</div>

					<div className="action">
						<i className="fa-solid fa-ellipsis"></i>
					</div>
				</div>

				<div className="news-block">
					<div className="content">
						<small>Cage Fights · Trending</small>
						<h4>Mark Zuckerberg</h4>
						<small>59.1k Tweets</small>
					</div>

					<div className="action">
						<i className="fa-solid fa-ellipsis"></i>
					</div>
				</div>
			</div>
			<div className={theme === "dark" ? "widget dark" : "widget"}>
				<h1>Who to follow</h1>

				<div className="follow-block">
					<div className="icon">
						<img src={imgElon} />
					</div>

					<div className="content">
						<h4>Elon Musk</h4>
						<h5>@elonmusk</h5>
					</div>

					<div className="action">
						<button className="follow-btn">Follow</button>
					</div>
				</div>

				<div className="follow-block">
					<div className="icon">
						<img src={imgZuck} />
					</div>

					<div className="content">
						<h4>Mark Zuckerberg</h4>
						<h5>@markzuckerberg</h5>
					</div>

					<div className="action">
						<button className="follow-btn">Follow</button>
					</div>
				</div>
			</div>
		</aside>
	);
}
