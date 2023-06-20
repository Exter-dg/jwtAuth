import { TextField } from "@mui/material";
import React from "react";

export default function CustomTextField({
	name,
	label,
	type,
	value,
	onChange,
}) {
	return (
		<TextField
			id={name}
			name={name}
			label={label}
			variant="outlined"
			type={type}
			value={value}
			onChange={onChange}
			className="custom-text-field"
			fullWidth
		/>
	);
}
