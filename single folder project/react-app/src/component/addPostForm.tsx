import React, { useState, useContext } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { Context } from "../context/Context";
import axios from "axios";

export default function AddPost() {
	let [data, setData] = useState({
		description: "",
		image: "",
		category: "",
	});
	const { state, dispatch } = useContext(Context);

	const setValue = (e: any) => {
		let name: any = e.target?.name;
		let value: any = e.target?.value;
		if (value.length > 0) {
			console.log(name, value, data);

			setData((prevState: any) => ({ ...prevState, [name]: value }));
		} else {
			console.log("enter all values");
		}
	};

	const addPost = async () => {
		let res = await axios.post(
			"http://localhost:5000/api/posts",
			JSON.stringify(data),
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: localStorage.getItem("token"),
				},
			}
		);
		dispatch({ type: "ADD_POST", payload: res.data });
		return;
	};

	return (
		<div>
			<Form
				style={{
					background: "white",
					width: "30%",
					padding: 30,
					margin: "5% auto",
					borderRadius: "5px",
					boxShadow: "0px 0px 4px 0px rgb(200, 200, 200)",
				}}
			>
				<Form.Group controlId="formGridDescription">
					<Form.Label>Description</Form.Label>
					<Form.Control
						name="description"
						placeholder="Description"
						onChange={setValue}
						as="textarea"
						rows={5}
					/>
				</Form.Group>

				<Form.Group controlId="formGridImage">
					<Form.Label>Image</Form.Label>

					<Form.Control name="image" placeholder="Image" onChange={setValue} />
				</Form.Group>

				<Form.Group as={Col} controlId="formGridState">
					<Form.Label>Category</Form.Label>
					<Form.Control
						name="category"
						as="select"
						defaultValue="Choose..."
						onChange={setValue}
					>
						<option>Choose...</option>
						<option>Javascript</option>
						<option>React</option>
						<option>Nodejs</option>
						<option>Express</option>
						<option>HTML</option>
						<option>CSS</option>
						<option>MongoDb</option>
					</Form.Control>
				</Form.Group>

				<Button
					variant="primary"
					type="button"
					onClick={addPost}
					style={{ margin: "0 35%" }}
				>
					Add Post
				</Button>
			</Form>
		</div>
	);
}
