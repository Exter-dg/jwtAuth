import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomTextField from "../components/CustomTextField";

export default function Register() {
	const [info, setInfo] = useState({
		email: "",
		password: "",
	});

	const handleChange = ({ target }) => {
		const { name, value } = target;
		setInfo({ ...info, [name]: value });
	};

	const handleSubmit = async () => {
		let results = await fetch("http://127.0.0.1:4000/register", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ ...info }),
		});
		results = await results.text();
		console.log(results);
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
				<CustomButton onClick={handleSubmit}>Register</CustomButton>
			</Box>
		</Container>
	);
}
