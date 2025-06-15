import jwt from "jsonwebtoken";
import { ESTETE_JWT_SECRET_KEY } from "../config/env.js";

export const shouldBeLoggedIn = async (req, res) => {
	//req.userId;
	res.status(200).json({ message: "You are authenticated!" });
};

export const shouldBeAdmin = async (req, res) => {
	const token = req.cookies.token;

	if (!token) return res.status(401).json({ message: "Not Authenticated!" });

	jwt.verify(token, ESTETE_JWT_SECRET_KEY, async (err, payload) => {
		if (err) return res.status(403).json({ message: "Token is not valid!" });
		if (!payload.isAdmin) {
			return res.status(403).json({ message: "Not authorized" });
		}
	});

	res.status(200).json({ message: "You are authenticated!" });
};
