import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";
import { Context } from "../context/Context";
import { Form, FormControl, Col } from "react-bootstrap";
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


import {
	MDBContainer,
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarToggler,
	MDBIcon,
	MDBNavbarNav,
	MDBNavbarItem,
	MDBNavbarLink,
	MDBCollapse,
} from "mdb-react-ui-kit";

// npm i antd @types/antd @ant-design/icons mdb-react-ui-kit react-bootstrap

export default function Header() {
	document.body.style.backgroundColor = "white";

	const [showBasic, setShowBasic] = useState(false);
	const [loggedOut, setloggedOut] = useState(false);

	let [searchText, setsearchText] = useState({
		searchText: "",
	});
	const { state, dispatch } = useContext(Context);

	const setCategoryValue = (e: any) => {
		let value: any = e.target?.value;

		dispatch({ type: "SEARCH_PARAMS", payload: value });
	};

	const setValue = (e: any) => {
		let name: any = e.target?.name;
		let value: any = e.target?.value;
		if (value.length > 0) {
			console.log(name, value, searchText);
			setsearchText((prevState: any) => ({ ...prevState, [name]: value }));
		} else {
			console.log("enter all values");
		}
	};

	const logout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");

		dispatch({
			type: "LOGOUT",
			payload: loggedOut,
		});
		setloggedOut(true);
	};

	return (
		<div>
			<MDBNavbar sticky={true} expand="lg" light bgColor="white">
				<MDBContainer fluid>
					<MDBNavbarBrand>
						<Link className="link-tag" to="/">
							{state.user || "Home"}
						</Link>
					</MDBNavbarBrand>
					{/* <MDBNavbarToggler
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={() => setShowBasic(showBasic)}
					>
						<MDBIcon icon="bars" fas />
					</MDBNavbarToggler> */}

					<MDBCollapse navbar show={showBasic}>
						<MDBNavbarNav className="mr-auto custom-nav mb-2 mb-lg-0">
							{state.loggedIn && (
								<MDBNavbarItem>
									<MDBNavbarLink active aria-current="page">
										<Link className="link-tag" to="/addPost">
											Add Post
										</Link>
									</MDBNavbarLink>
								</MDBNavbarItem>
							)}

							{!state.loggedIn && (
								<MDBNavbarItem>
									<MDBNavbarLink tabIndex={-1} aria-disabled="true">
										<Link className="link-tag" to="/signup">
											Signup
										</Link>
									</MDBNavbarLink>
								</MDBNavbarItem>
							)}

							{!state.loggedIn && (
								<MDBNavbarItem>
									<MDBNavbarLink tabIndex={-1} aria-disabled="true">
										<Link className="link-tag" to="/login">
											Login
										</Link>
									</MDBNavbarLink>
								</MDBNavbarItem>
							)}
							<MDBNavbarItem>
									<MDBNavbarLink tabIndex={-1} aria-disabled="true">
										<Link className="link-tag" to="/contactus">
											Contact Us
										</Link>
									</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
									<MDBNavbarLink tabIndex={-1} aria-disabled="true">
										<Link className="link-tag" to="/profile">
											Profile
										</Link>
									</MDBNavbarLink>
							</MDBNavbarItem>
							<Form.Group as={Col} controlId="formGridState">
								<Form.Control
									name="category"
									as="select"
									defaultValue="Choose..."
									onChange={setCategoryValue}
									style={{ width: "100px", padding:"0" }}
								>
									<option value="">Category...</option>
									<option value="Javascript">Javascript</option>
									<option value="React">React</option>
									<option value="Nodejs">Nodejs</option>
									<option value="Express">Express</option>
									<option value="HTML">HTML</option>
									<option value="CSS">CSS</option>
									<option value="MongoDb">MongoDb</option>
								</Form.Control>
							</Form.Group>
						</MDBNavbarNav>

						<Form inline>
							<FormControl
								type="text"
								placeholder="Search"
								style={{ margin: "0% 0 0 -50%" }}
								className="mr-sm-1"
								onChange={setValue}
							/>
							<Tooltip title="search">
								<Button type="primary" shape="circle" icon={<SearchOutlined style={{ fontSize: '23px' }} />} />
							</Tooltip>
						</Form>
							{state.loggedIn && (
								<LogoutOutlined
									onClick={logout}
									title="Logout"
									style={{
										margin: "-16% 0 0 90%",
										fontSize: "30px",
										color: "gray",
										cursor: "pointer",
									}}
								/>
							)}
						
					</MDBCollapse>
				</MDBContainer>
			</MDBNavbar>
		</div>
	);
}
