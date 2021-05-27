import { combineReducers, createStore } from "redux";
import { userReducer, postReducer } from "./reducer/reducer";

console.log(userReducer, postReducer);

const reducer = combineReducers({ user: userReducer, post: postReducer });

console.log(reducer);

const store = createStore(reducer);

export default store;
