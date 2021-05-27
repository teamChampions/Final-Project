import React from "react";
import Homepage from "./component/Header";
import Signup from "./component/signupForm";
import CardComponent from "./component/card";
import "./style.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AddPost from "./component/addPostForm";
import Login from "./component/LoginForm";

function App(props: any) {
	console.log(props.store);

	return (
		<div className="App">
			<Router>
				<Homepage />
				<Switch>
					<Route exact path="/">
						<CardComponent />
					</Route>
					<Route exact path="/addPost">
						<AddPost />
					</Route>
					<Route exact path="/signup">
						<Signup />
					</Route>

					<Route exact path="/login">
						<Login />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
