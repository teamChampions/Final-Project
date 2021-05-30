import React, { useState, useContext } from "react";
import { Form, Button, Col, Image, Container } from "react-bootstrap";
import { Context } from "../context/Context";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Signup() {

	document.body.style.backgroundColor = "#9EA9FA";

	let [data, setData] = useState({
		userName: "",
		email: "",
		password: "",
		confirmPassword: "",
		profileImage:"",
	});
	const { state, dispatch } = useContext(Context);

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
		<div>
			<Form className="signup-form"
			><h3 style={{ textAlign: "center", margin: "5% auto", fontFamily: "Pattaya, sans-serif", fontSize:"250%" }}>Skill Media</h3>
				<Form.Row>
					<Form.Group as={Col} className="form-group-signup" controlId="formGridName">
						<Form.Label><strong>Username</strong></Form.Label>
						<Form.Control className="form-control-signup"
							onChange={setValue}
							name="userName"
							type="text"
							placeholder="Username"
						/>
					</Form.Group>

					<Form.Group as={Col} className="form-group-signup" controlId="formGridEmail">
						<Form.Label><strong>Email</strong></Form.Label>
						<Form.Control className="form-control-signup"
							onChange={setValue}
							type="email"
							name="email"
							placeholder="Enter email"
						/>
					</Form.Group>
				</Form.Row>

				<Form.Row>
					<Form.Group as={Col} className="form-group-signup" controlId="formGridEmail">
						<Form.Label><strong>Password</strong></Form.Label>
						<Form.Control className="form-control-signup"
							onChange={setValue}
							type="password"
							name="password"
							placeholder="Enter Password"
						/>
					</Form.Group>

					<Form.Group as={Col} className="form-group-signup" controlId="formGridPassword">
						<Form.Label><strong>Confirm Password</strong></Form.Label>
						<Form.Control className="form-control-signup"
							onChange={setValue}
							type="password"
							name="password"
							placeholder="Confirm Password"
						/>
					</Form.Group>
				</Form.Row>

				<Form.Group className="form-group-signup" controlId="formGridImage">
					<Form.Label><strong>Image</strong></Form.Label>
					<Form.Control className="form-control-signup"
						name="profileImage"
						onChange={setValue}
						placeholder="Image"
					/>
				</Form.Group>
				{data.profileImage?<div style={{display:"flex", justifyContent:"center"}}>
					<div>
						<Image className="pofileimage" roundedCircle={true} thumbnail={true} src={data.profileImage} />
					</div>
				</div>:null}
				<Link to="/home"><Button className="signupsubmit"
					variant="primary"
					onClick={signupSubmit}
					type="button"
				>Submit
				</Button>
				</Link>
			</Form>
		</div>
		</div>
	);
}
