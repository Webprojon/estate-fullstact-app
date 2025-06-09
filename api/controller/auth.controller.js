import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
import { ESTETE_JWT_SECRET_KEY } from "../config/env.js";

export const register = async (req, res) => {
	const { username, email, password } = req.body;

	try {
		// Hashing the password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create new user and save to database
		const newUser = await prisma.user.create({
			data: {
				email,
				username,
				password: hashedPassword,
			},
		});

		res.status(201).json({ message: "User created successfully" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Failed to create user" });
	}
};

export const login = async (req, res) => {
	const { username, password } = req.body;

	try {
		// Check is user is exists or not
		const user = await prisma.user.findUnique({
			where: { username },
		});

		if (!user) return res.status(401).json({ message: "Invalid Credentials" });

		// Check if the password is correct
		const isPasswordValid = await bcrypt.compare(password, user.password);

		if (!isPasswordValid) return res.status(401).json({ message: "Invalid Credentials" });

		// Generate cookie token and sent to the user
		const age = 7 * 24 * 60 * 60 * 1000;
		const token = jwt.sign(
			{
				id: user.id,
			},
			ESTETE_JWT_SECRET_KEY,
			{ expiresIn: age },
		);

		res.cookie("token", token, {
			httpOnly: true,
			maxAge: age,
		});

		res.status(200).json({ message: "Logged in successfully" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Failed to login" });
	}
};

export const logout = (req, res) => {
	res.clearCookie("token").status(200).json({ message: "Logout successfull" });
};
