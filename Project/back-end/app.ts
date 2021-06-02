import express from "express";
import cors from "cors";
import connectionToDB from "./connection-to-db";
import dotenv from "dotenv";
import userRouter from "./Routes/users-route";
import postRouter from "./Routes/posts-route";
import commentsRouter from "./Routes/comments-route";
import likeRouter from "./Routes/likes-route";

dotenv.config();

const startServer = () => {
	const app = express();

	app.use(express.json());

	app.use(cors());

	connectionToDB()
		.then(() => {
			console.log("Connected to database");

			app.on("error", (err: any) => {
				console.log(`Error Connecting to http://localhost:${process.env.PORT}`);
				console.log(err.message);
			});

			app.listen(process.env.PORT, () => {
				console.log(`Server Running at http://localhost:${process.env.PORT}`);
			});
		})
		.catch((err: any) => {
			console.log(err);
		});

	app.use("/api/users", userRouter);
	app.use("/api/posts", postRouter);
	app.use("/api/comments", commentsRouter);
	app.use("/api/likes", likeRouter);
	app.use("/uploads", express.static(__dirname + "/uploads"));
};

startServer();
