const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

app.use(
	cors({
		origin: "http://localhost:3000",
	})
);

const data = [
	{
		email: "abc@gmail.com",
		password: "12345678",
	},
];

const generateToken = (email) => {
	const token = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: 60,
	});
	return token;
};

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello world");
});

app.post("/login", (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) return res.status(400).send("Data not found");

	const found = data.find((val) => {
		if (val.email === email) return val;
	});

	if (!found) return res.status(400).send("Email doesn't exists");

	if (found.password !== password)
		return res.status(400).send("Invalid Password");

	const access_token = generateToken(email);

	const refresh_token = jwt.sign({ email }, process.env.REFRESH_TOKEN_SECRET, {
		expiresIn: "1 days",
	});

	res.json({
		access_token,
		refresh_token,
	});
});

app.post("/register", (req, res) => {
	const { email, password } = req.body;
	console.log(email, password, req.body);
	if (!email || !password) return res.status(400).send("Data not found");

	data.push({ email, password });
	res.send("Registered Succesfully");
});

app.post("/renewToken", (req, res) => {
	const { refresh_token } = req.body;
	// verify refresh token
	try {
		const decoded = jwt.verify(refresh_token, process.env.REFRESH_TOKEN_SECRET);
		const token = generateToken(decoded.email);
		res.json({ access_token: token });
	} catch (err) {
		res.status(401).send("Token Expired");
	}
});

app.listen(4000);
