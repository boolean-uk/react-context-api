import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { TweetsCtxProvider } from "./stores/tweets-ctx.jsx";
import ThemeCtx, { ThemeCtxProvider } from "./stores/theme-ctx.jsx";
import { AuthCtxProvider } from "./stores/auth-ctx.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<TweetsCtxProvider>
			<ThemeCtxProvider>
				<AuthCtxProvider>
					<App />
				</AuthCtxProvider>
			</ThemeCtxProvider>
		</TweetsCtxProvider>
	</React.StrictMode>
);
