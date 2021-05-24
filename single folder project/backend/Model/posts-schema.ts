import mongoose from "mongoose";

const PostsSchema = new mongoose.Schema(
	{
		description: {
			type: String,
		},
		image: {
			type: String,
		},
		users: {
			type: mongoose.Schema.Types.ObjectId,
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
				type: mongoose.Schema.Types.ObjectId,
				ref: "comments",
			},
		],
	},
	{ timestamps: true }
);

const PostsModel = mongoose.model("posts", PostsSchema);

export default PostsModel;
