import express from "express";
import { getAllusers, signup, login } from "../Controller/users-controller";
const userRouter = express.Router();

//Route for getting all the users
userRouter.get("/users", getAllusers);
userRouter.post("/users", signup);
userRouter.post("/users/login", login);

export default userRouter;
