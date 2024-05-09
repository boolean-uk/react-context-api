import React, { useState } from "react";
const ThemeCtx = React.createContext({
	theme: "",
	setDarkMode: () => {},
	setLightMode: () => {},
	clearLocalData: () => {},
});

export const ThemeCtxProvider = (props) => {
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") || "dark"
	);

	function setDarkMode() {
		setTheme("dark");
		localStorage.setItem("theme", "dark");
	}
	function setLightMode() {
		setTheme("light");
		localStorage.setItem("theme", "light");
	}

	function clearLocalData() {
		localStorage.removeItem("theme");
	}

	return (
		<ThemeCtx.Provider
			value={{ theme, setDarkMode, setLightMode, clearLocalData }}>
			{props.children}
		</ThemeCtx.Provider>
	);
};

export default ThemeCtx;
