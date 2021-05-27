import React, { useState, useContext } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export default function Signup() {
	let [data, setData] = useState({
		userName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const state = useSelector((state: any) => state.user);
	const dispatch = useDispatch();

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

	const signupSubmit = async () => {
		if (data.email && data.password) {
			let res = await axios.post(
				"http://localhost:5000/api/users",
				JSON.stringify(data),
				{ headers: { "Content-Type": "application/json" } }
			);
			dispatch({ type: "ADD_USER", payload: res.data });
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
					width: "50%",
					padding: 30,
					margin: "5% auto",
					borderRadius: "5px",
					boxShadow: "0px 0px 4px 0px rgb(200, 200, 200)",
				}}
			>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridName">
						<Form.Label>Username</Form.Label>
						<Form.Control
							onChange={setValue}
							name="userName"
							type="text"
							placeholder="Username"
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control
							onChange={setValue}
							type="email"
							name="email"
							placeholder="Enter email"
						/>
					</Form.Group>
				</Form.Row>

				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Password</Form.Label>
						<Form.Control
							onChange={setValue}
							type="password"
							name="password"
							placeholder="Enter Password"
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridPassword">
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control
							onChange={setValue}
							type="password"
							name="password"
							placeholder="Confirm Password"
						/>
					</Form.Group>
				</Form.Row>

				<Form.Group controlId="formGridImage">
					<Form.Label>Image</Form.Label>
					<Form.Control
						name="profileImage"
						onChange={setValue}
						placeholder="Image"
					/>
				</Form.Group>

				<Button
					variant="primary"
					onClick={signupSubmit}
					type="button"
					style={{ margin: "0 43%" }}
				>
					Submit
				</Button>
			</Form>
		</div>
	);
}
