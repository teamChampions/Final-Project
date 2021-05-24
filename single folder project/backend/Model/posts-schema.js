"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var PostsSchema = new mongoose_1.default.Schema({
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    users: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "users",
    },
    upvotes: {
        type: Number,
    },
    downvotes: {
        type: Number,
    },
    category: {
        type: String,
    },
    comments: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "comments",
        },
    ],
}, { timestamps: true });
var PostsModel = mongoose_1.default.model("posts", PostsSchema);
exports.default = PostsModel;
