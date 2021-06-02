"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var LikeSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "users",
    },
    post: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "posts",
    },
    comment: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "comments",
    },
});
var Likes = mongoose_1.default.model("likes", LikeSchema);
exports.default = Likes;
