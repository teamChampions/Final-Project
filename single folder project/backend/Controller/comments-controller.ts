import comments from "../Model/comment-schema";
import PostsModel from "../Model/posts-schema";

const addComment = async (req: any, res: any) => {
	try {
		const posts: any = await PostsModel.findById(req.body.post);
		if (posts) {
			const comment = await comments.create({
				comment: req.body.comment,
				post: req.body.post,
				user: req.user._id,
			});
			if (comment) {
				posts.comments.push(comment);
				posts.save();
				res.status(201).json(posts);
			}
		}
	} catch (err: any) {
		res.status(401).send(err.message);
	}
};

export default addComment;
