import React, { createContext, useReducer } from "react";
import reducer from "../reducer/reducer";

interface Props {
	children?: any;
}

export const Context = createContext<any>({});

const initialState = {
	posts: [],
	users: [],
	loggedIn: false,
	user: "",
	searchParams: "",
	selectedPosts: [],
	commentLength: 0,
};

const ContextProvider = (props: Props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<Context.Provider value={{ state, dispatch }}>
			{props.children}
		</Context.Provider>
	);
};

export default ContextProvider;
