const initialState = {
	posts: [],
	users: [],
	loggedIn: false,
	user: "",
	searchParams: "",
	selectedPosts: [],
	commentLength: 0,
};

const postReducer = (currentState = initialState, action: any): any => {
	switch (action.type) {
		case "DISPLAY_POSTS":
			console.log(currentState);

			return {
				...currentState,
				posts: action.payload,
				loggedIn: action.loggedIn,
				user: action.user,
			};

		case "SEARCH_PARAMS":
			console.log(currentState);
			return {
				...currentState,
				searchParams: action.payload,
			};

		case "DISPLAY_POSTS_BY_CATEGORY":
			console.log(currentState);
			return {
				...currentState,
				selectedPosts: action.payload,
			};

		case "ADD_POST":
			console.log(currentState);
			return currentState;

		case "ADD_COMMENT":
			console.log(currentState);
			return {
				...currentState,
				commentLength: action.commentLength,
			};

		default:
			return currentState;

		// case "ADD_USER":
		// 	console.log(currentState);
		// 	return currentState;

		// case "LOGIN":
		// 	console.log("LOGIN", action.payload);
		// 	console.log("LOGIN", action.user);

		// 	return {
		// 		...currentState,
		// 		user: action.user,
		// 		loggedIn: action.payload,
		// 	};

		// case "LOGOUT":
		// 	return {
		// 		...currentState,
		// 		user: action.user,
		// 		loggedIn: action.payload,
		// 	};
	}
};

const userReducer = (currentState = initialState, action: any): any => {
	switch (action.type) {
		case "ADD_USER":
			console.log(currentState);
			return currentState;

		case "LOGIN":
			console.log("LOGIN", action.payload);
			console.log("LOGIN", action.user);

			return {
				...currentState,
				user: action.user,
				loggedIn: action.payload,
			};

		case "LOGOUT":
			return {
				...currentState,
				user: action.user,
				loggedIn: action.payload,
			};
		default:
			return currentState;
	}
};

export { postReducer, userReducer };
