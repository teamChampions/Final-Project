import React, { useState, useContext } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { Context } from "../context/Context";
import axios from "axios";
import { useHistory } from "react-router";
import secure_login  from "../images/secure_login.svg"
import "../style.css"
import { Link } from "react-router-dom";

export default function Login() {

	document.body.style.backgroundColor = "#9EA9FA";
	
	let [data, setData] = useState({
		email: "",
		password: "",
	});
	const { state, dispatch } = useContext(Context);
	const history = useHistory();
	const setValue = (e: any) => {
		let name: any = e.target?.name;
		let value: any = e.target?.value;
		if (value.length > 0) {
			console.log(name, value, data);
			setData((prevUser: any) => ({ ...prevUser, [name]: value }));
		} else {
			console.log("enter all values");
		}
	};

	const login = async () => {
		if (data.email && data.password) {
			let res = await axios.post(
				"http://localhost:5000/api/users/login",
				JSON.stringify(data),
				{ headers: { "Content-Type": "application/json" } }
			);
			console.log(res);

			localStorage.setItem("token", res.data.token);
			localStorage.setItem("user", res.data.user);

			dispatch({
				type: "LOGIN",
				payload: localStorage.length > 0,
				user: localStorage.getItem("user"),
			});
			history.push("/home");
			return;
		} else {
			console.log("Enter all values");
		}
	};

	return (
		<div className = "login-page" style={{
			display: "flex"}}>
			<div className="secure-login-svg">
				<img src={secure_login}/>
			</div>
			<Form className="login-form"
			><h3 style={{ textAlign: "center", marginBottom: "25%", fontFamily: "Pattaya, sans-serif", fontSize:"250%" }}>Skill Media</h3>
				<Form.Row>
					<Form.Group controlId="formGridEmail">
						<Form.Label><strong>Email</strong></Form.Label>
						<Form.Control className="form-control-login"
							onChange={setValue}
							name="email"
							type="email"
							placeholder="Enter email"
						/>
					</Form.Group>
					<Form.Group controlId="formGridEmail">
						<Form.Label><strong>Password</strong></Form.Label>
						<Form.Control className="form-control-login"
							name="password"
							onChange={setValue}
							type="password"
							placeholder="Enter Password"
						/>
					</Form.Group>
				</Form.Row>
				<Button className="login-button"
					variant="primary"
					type="button"
					onClick={login}
				>Login
				</Button>
				<Link to="/signup" ><Button className="login-signup-button"
					variant="primary"
					type="button"
					onClick={login}
				>SIGNUP
				</Button>
				</Link>
			</Form>
		</div>
	);
}
