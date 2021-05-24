"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var posts_controller_1 = require("../Controller/posts-controller");
var users_controller_1 = require("../Controller/users-controller");
var postRouter = express_1.default.Router();
//Route for getting all the users
postRouter
    .get("/posts", posts_controller_1.getAllposts)
    .post("/posts", users_controller_1.isAuthorised, posts_controller_1.addPost)
    .get("/posts/category/:category", posts_controller_1.getAllpostsByCategory);
// postRouter.route("/posts").post(isAuthorised, addPost);
exports.default = postRouter;
