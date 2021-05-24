import axios from "axios";

const displayAllPosts = async () => {
	const res = await axios.get("http://localhost:5000/api/posts");
	return {
		type: "DISPLAY_POSTS",
		payload: res.data,
		loggedIn: localStorage.length > 0,
		user: localStorage.getItem("user"),
	};
};

const getPostsByCategory = async (data: any) => {
	const res = await axios.get(
		`http://localhost:5000/api/posts/category/${data}`
	);
	return {
		type: "DISPLAY_POSTS_BY_CATEGORY",
		payload: res.data,
	};
};

const addComment = async (data: any) => {
	let res = await axios.post(
		"http://localhost:5000/api/comments",
		JSON.stringify(data),
		{
			headers: {
				"Content-Type": "application/json",
				Authorization: localStorage.getItem("token"),
			},
		}
	);
	return {
		type: "ADD_COMMENT",
		payload: res.data,
		commentLength: res.data.comments.length,
	};
};

const addPost = async (data: any) => {
	const res = await axios.post(
		`http://localhost:5000/api/comments`,
		JSON.stringify(data),
		{ headers: { "Content-Type": "application/json" } }
	);
	return {
		type: "DISPLAY_POSTS_BY_CATEGORY",
		payload: res.data,
	};
};

export { displayAllPosts, getPostsByCategory, addPost, addComment };
