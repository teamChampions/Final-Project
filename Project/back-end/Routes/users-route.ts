import express from "express";
import { getAllusers, signup, login } from "../Controller/users-controller";
const userRouter = express.Router();

//Route for getting all the users
userRouter
	.get("/", getAllusers)
	.post("/", signup)
	.post("/login", login);

export default userRouter;
