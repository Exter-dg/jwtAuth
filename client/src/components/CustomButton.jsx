import { Button } from "@mui/material";
import React from "react";

export default function CustomButton({ onClick = null, children }) {
	return (
		<Button variant="contained" className="button" fullWidth onClick={onClick}>
			{children}
		</Button>
	);
}
