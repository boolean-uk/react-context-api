import React from "react";
import user from "../assets/data/user";
const AuthCtx = React.createContext({
	user,
});

export const AuthCtxProvider = (props) => {
	return (
		<AuthCtx.Provider value={{ user }}>{props.children}</AuthCtx.Provider>
	);
};

export default AuthCtx;
