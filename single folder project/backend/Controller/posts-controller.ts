import PostsModel from "../Model/posts-schema";

const getAllposts = async (req: any, res: any) => {
	try {
		PostsModel.find()
			.populate({ path: "users", select: "_id userName" })
			.populate({
				path: "comments",
				options: { sort: { createdAt: "desc" } },
				populate: {
					path: "user",
					select: "_id userName",
				},
			})
			.sort({ createdAt: "desc" })
			.exec((err, posts) => {
				res.status(200).send(posts);
			});
	} catch (err: any) {
		res.status(404).json({
			status: false,
			message: "Could not find any any post",
		});
	}
};

const getAllpostsByCategory = async (req: any, res: any) => {
	try {
		console.log(req.params);

		PostsModel.find({ category: req.params.category })
			.populate({ path: "users", select: "_id userName" })
			.populate({
				path: "comments",
				options: { sort: { createdAt: "desc" } },
				populate: {
					path: "user",
					select: "_id userName",
				},
			})
			.sort({ createdAt: "desc" })
			.exec((err, posts) => {
				res.status(200).send(posts);
			});
	} catch (err: any) {
		res.status(404).json({
			status: false,
			message: "Could not find any any post",
		});
	}
};

const addPost = async (req: any, res: any) => {
	try {
		console.log("User post", req.user);
		const data = await PostsModel.create({
			description: req.body.description,
			category: req.body.category,
			image: req.body.image || "",
			users: req.user._id,
		});
		res.status(200).send(data);
	} catch (err: any) {
		res.status(401).json({
			status: false,
			message: "Could not add the post",
		});
	}
};

export { getAllposts, addPost, getAllpostsByCategory };
