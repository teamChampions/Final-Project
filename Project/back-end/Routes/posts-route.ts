import express from "express";
import {
	getAllposts,
	addPost,
	getAllpostsByCategory,
	getUserPosts,
	getPostsByUser,
	uploadPost,
	deletePost,
} from "../Controller/posts-controller";
import { isAuthorised } from "../Controller/users-controller";
const postRouter = express.Router();

//Route for getting all the users
postRouter
	.get("/", getAllposts)
	.post("/", isAuthorised, uploadPost, addPost)
	.get("/category/:category", getAllpostsByCategory)
	.get("/user/:id", getUserPosts)
	.delete("/:id", isAuthorised, deletePost)
	.get("/users/:user_name", getPostsByUser);

// postRouter.route("/posts").post(isAuthorised, addPost);

export default postRouter;
