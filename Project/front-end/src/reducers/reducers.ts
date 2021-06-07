import {
	ALL_POSTS,
	LOGGED_IN,
	LOGGED_OUT,
	USER_PROFILE,
} from "../store/constants";

const initialStateOfUser = {
	loggedInUser: "",
	userProfile: [],
};
const userReducer = (currentState = initialStateOfUser, action: any): any => {
	switch (action.type) {
		case LOGGED_IN:
			return {
				...currentState,
				loggedInUser: action.payload,
			};
		case LOGGED_OUT:
			return {
				...currentState,
				loggedInUser: action.payload,
			};
		case USER_PROFILE:
			return {
				...currentState,
				userProfile: action.payload,
			};
		default:
			return currentState;
	}
};

const initialStateOfPost = {
	posts: [],
	searchedPosts: [],
	searchParams: {},
};

const postsReducer = (currentState = initialStateOfPost, action: any): any => {
	switch (action.type) {
		case ALL_POSTS:
			console.log(action.payload);
			return {
				...currentState,
				posts: action.payload,
			};
		default:
			return currentState;
	}
};

export { userReducer, postsReducer };
