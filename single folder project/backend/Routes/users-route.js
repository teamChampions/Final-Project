"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_controller_1 = require("../Controller/users-controller");
var userRouter = express_1.default.Router();
//Route for getting all the users
userRouter.get("/users", users_controller_1.getAllusers);
userRouter.post("/users", users_controller_1.signup);
userRouter.post("/users/login", users_controller_1.login);
exports.default = userRouter;
