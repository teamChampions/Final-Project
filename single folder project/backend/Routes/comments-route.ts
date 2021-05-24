import express from "express";
import { isAuthorised } from "../Controller/users-controller";
import addComment from "../Controller/comments-controller";

const commentsRoute = express.Router();

commentsRoute.post("/comments", isAuthorised, addComment);

export default commentsRoute;
