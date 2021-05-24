const reducer = (currentState: any, action: any) => {
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
	}
};

export default reducer;
