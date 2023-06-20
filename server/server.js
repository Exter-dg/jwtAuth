// Post server
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
require("dotenv").config();

app.use(express.json());

app.post("/verify", (req, res) => {
	const { token } = req.body;
	try {
		const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
		res.json(decoded);
	} catch (err) {
		console.log("error: ", err);
		res.status(401).send("Token Expired");
	}
});

app.listen(4001);
