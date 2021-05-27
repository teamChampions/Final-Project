import { combineReducers, createStore } from "redux";
import { userReducer, postReducer } from "./reducer/reducer";

const reducer = combineReducers({ user: userReducer, post: postReducer });

const store = createStore(reducer);

export default store;
