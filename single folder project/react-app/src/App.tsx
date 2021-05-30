import React from "react";
import Homepage from "./component/Header";
import ContextProvider from "./context/Context";
import Signup from "./component/signupForm";
import CardComponent from "./component/card";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AddPost from "./component/addPostForm";
import Login from "./component/LoginForm";
import ContactUs from "./component/ContactUs";
import Profile from "./component/Profile";

function App() {
	return (
		<div className="App">
			<ContextProvider>
				<Router>
					<Switch>
						<Route exact path="/">
							<Login />
						</Route>
						<Route exact path="/home">
							<Homepage />
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
						<Route exact path="/contactus">
							<ContactUs />
						</Route>
						<Route exact path="/profile">
							<Profile />
						</Route>
					</Switch>
				</Router>
			</ContextProvider>
		</div>
	);
}

export default App;
