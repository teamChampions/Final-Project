import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router";

export default function Login() {
	let [data, setData] = useState({
		email: "",
		password: "",
	});
	const state = useSelector((state: any) => state.user);
	const dispatch = useDispatch();
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
			history.push("/");
			return;
		} else {
			console.log("Enter all values");
		}
	};

	return (
		<div>
			<Form
				style={{
					background: "white",
					width: "45%",
					padding: 30,
					margin: "5% auto",
					borderRadius: "5px",
					boxShadow: "0px 0px 4px 0px rgb(200, 200, 200)",
				}}
			>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control
							onChange={setValue}
							name="email"
							type="email"
							placeholder="Enter email"
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Password</Form.Label>
						<Form.Control
							name="password"
							onChange={setValue}
							type="password"
							placeholder="Enter Password"
						/>
					</Form.Group>
				</Form.Row>

				<Button
					variant="primary"
					type="button"
					onClick={login}
					style={{ margin: "0 43%" }}
				>
					Login
				</Button>
			</Form>
		</div>
	);
}
