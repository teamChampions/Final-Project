import axios from "axios";
import {
	ALL_POSTS,
	ADD_POST,
	LOGGED_IN,
	POST_DETAILS,
	ADD_COMMENT,
	DELETE_COMMENT,
	LIKE_POST,
	LIKE_COMMENT,
} from "../store/constants";
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
		return { type: LOGGED_IN, payload: localStorage.getItem("user") };
	} catch (err) {
		console.log(err.message);
		return null;
	}
};

const likeApi = async (postID: any) => {
	try {
		const result = await axios.post(
			`http://localhost:5000/api/likes/toggle/${postID}`,
			{},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: localStorage.getItem("token"),
				},
			}
		);
		return {
			type: LIKE_POST,
			payload: result.data.count,
		};
	} catch (err) {}
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

const deleteComment = async (data: any) => {
	const res = await axios.delete(`http://localhost:5000/api/comments/${data}`, {
		headers: {
			"Content-Type": "application/json",
			Authorization: localStorage.getItem("token"),
		},
	});
	return {
		type: DELETE_COMMENT,
		commentLength: res.data.comments.length,
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
		type: ADD_COMMENT,
		commentLength: res.data.comments.length,
	};
};

const addPost = async (data: any) => {
	try {
		console.log(`localStorage.getItem("token")`,localStorage.getItem("token") )
		const res = await axios.post(`http://localhost:5000/api/posts`, data, {
			headers: {
				"Content-Type": "application/json",
				Authorization: localStorage.getItem("token"),
			},
		});

		return {type:ADD_POST};
	} catch (err) {
		console.log(err)
		return err;
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

const getPostDetails = async (postid: any) => {
	try {
		const postDetails = await axios.get(
			`http://localhost:5000/api/posts/comments/postid/${postid}`
		);
		return { type: POST_DETAILS, payload: postDetails.data };
	} catch (err) {
		return err;
	}

};

const likeCommentApi=async (data: any) => {
	const res = await axios.post(`http://localhost:5000/api/likes/comments/${data}`,{}, {
		headers: {
			"Content-Type": "application/json",
			Authorization: localStorage.getItem("token"),
		},
	});
	return {
		type: LIKE_COMMENT,
		payload: res.data.count,
	};
};
export {
	loginUser,
	signupUser,
	displayAllPosts,
	getPostsByCategory,
	addPost,
	addComment,
	currentUserProfile,
	getPostDetails,
	deleteComment,
	likeApi,
	likeCommentApi
};
