import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
	console.log("it works");
});

router.post("/", (req, res) => {
	console.log("it works");
});

router.put("/", (req, res) => {
	console.log("it works");
});

router.delete("/", (req, res) => {
	console.log("it works");
});

export default router;
