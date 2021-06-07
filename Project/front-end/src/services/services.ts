import axios from "axios";
import { ALL_POSTS, LOGGED_IN } from "../store/constants";
const loginUser = async (data: any) => {
	try {
		let response = await axios.post(
			"http://localhost:5000/api/users/login",
			JSON.stringify(data),
			{ headers: { "Content-Type": "application/json" } }
		);
		localStorage.setItem("token", response.data.token);
		localStorage.setItem("user", response.data.user);
		localStorage.setItem("userID", response.data.userId);
		return { type: LOGGED_IN, payload: response.data.user };
	} catch (err) {
		console.log(err.message);
		return null;
	}
};

const signupUser = async (data: any) => {
	try {
		let response = await axios.post(
			"http://localhost:5000/api/users",
			JSON.stringify(data),
			{ headers: { "Content-Type": "application/json" } }
		);
		return response;
	} catch (err) {
		return null;
	}
};

const displayAllPosts = async () => {
	const res = await axios.get(`http://localhost:5000/api/posts`, {
		headers: { "Content-Type": "multipart/form-data" },
	});
	console.log(res.data);
	return {
		type: ALL_POSTS,
		payload: res.data,
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
		`http://localhost:5000/api/comments`,
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
	try {
		const res = await axios.post(
			`http://localhost:5000/api/posts`,
			JSON.stringify(data),
			{
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			}
		);

		return { type: "ADD_POST", payload: res.data };
	} catch (err) {
		return null;
	}
};

const currentUserProfile = async (data: any) => {
	try {
		const res = await axios.post(
			`http://localhost:5000/api/users/profile`,
			JSON.stringify(data),
			{
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			}
		);
		return { type: "USER_PROFILE", payload: res.data };
	} catch (err) {
		return null;
	}
};

export {
	loginUser,
	signupUser,
	displayAllPosts,
	getPostsByCategory,
	addPost,
	addComment,
	currentUserProfile,
};
