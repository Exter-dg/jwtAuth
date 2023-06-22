import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const defaultAuthInfo = {
	isLoggedIn: false,
	access_token: "",
	refresh_token: "",
	email: "",
};

export default function AuthContextProvider({ children }) {
	const [authInfo, setAuthInfo] = useState({ ...defaultAuthInfo });

	useEffect(() => {
		console.log(authInfo);
	}, [authInfo]);

	const resetAuthInfo = () => {
		setAuthInfo({ ...defaultAuthInfo });
	};

	const updateAuthInfo = (access_token, refresh_token, email) => {
		setAuthInfo({ access_token, refresh_token, email, isLoggedIn: true });
	};

	return (
		<AuthContext.Provider value={{ authInfo, resetAuthInfo, updateAuthInfo }}>
			{children}
		</AuthContext.Provider>
	);
}
