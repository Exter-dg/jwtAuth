import { Box, Button, Container, Input, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomTextField from "../components/CustomTextField";
import AuthContextProvider, { AuthContext } from "../hooks/AuthContext";

export default function Login() {
	const [info, setInfo] = useState({
		email: "",
		password: "",
	});

	const { authInfo, resetAuthInfo, updateAuthInfo } = useContext(AuthContext);
	const handleChange = ({ target }) => {
		const { name, value } = target;
		setInfo({ ...info, [name]: value });
	};

	const handleSubmit = async () => {
		let results = await fetch("http://127.0.0.1:4000/login", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ ...info }),
		});
		results = await results.json();
		updateAuthInfo(results.access_token, results.refresh_token, info.email);
	};

	return (
		<Container className="box-container">
			{authInfo !== undefined && authInfo.isLoggedIn ? (
				authInfo.email
			) : (
				<Box className="form-container">
					<CustomTextField
						name="email"
						label="Email-id"
						type="email"
						value={info.email}
						onChange={handleChange}></CustomTextField>

					<CustomTextField
						name="password"
						label="Password"
						type="password"
						value={info.password}
						onChange={handleChange}></CustomTextField>
					<CustomButton onClick={handleSubmit}>Login</CustomButton>
				</Box>
			)}
		</Container>
	);
}
