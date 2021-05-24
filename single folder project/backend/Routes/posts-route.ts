import express from "express";
import {
	getAllposts,
	addPost,
	getAllpostsByCategory,
} from "../Controller/posts-controller";
import { isAuthorised } from "../Controller/users-controller";
const postRouter = express.Router();

//Route for getting all the users
postRouter
	.get("/posts", getAllposts)
	.post("/posts", isAuthorised, addPost)
	.get("/posts/category/:category", getAllpostsByCategory);

// postRouter.route("/posts").post(isAuthorised, addPost);

export default postRouter;
