import { Box, Button, Container, Input, TextField } from "@mui/material";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomTextField from "../components/CustomTextField";

export default function Login() {
	const [info, setInfo] = useState({
		email: "",
		password: "",
	});

	const handleChange = ({ target }) => {
		const { name, value } = target;
		setInfo({ ...info, [name]: value });
	};

	const handleSubmit = () => {
		console.log("Login");
	};

	return (
		<Container className="box-container">
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
		</Container>
	);
}
