import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { currentUserProfile } from "../../services/services";
import "./profile.css";

function Profile() {
	const dispatch = useDispatch();

	const state = useSelector((state: any) => state.user);

	useEffect(() => {
		currentUserProfile(localStorage.getItem("userId")).then((res) => {
			dispatch(res);
		});
	}, []);

	console.log("state.userProfile", state.userProfile);

	return (
		<div>
			<Container>
				<Row>
					<Col md={{ span: 8, offset: 2 }}>
						{state.userProfile.map((value: any, index: any) => {
							console.log("value.users", value.users);

							return (
								<div className="profile-maindiv">
									<div className="profile-image">
										<img
											style={{
												width: "200px",
												margin: "20% auto",
												height: "200px",
												borderRadius: "50%",
											}}
											src="https://newevolutiondesigns.com/images/freebies/flowers-facebook-cover-preview-2.jpg"
										/>
									</div>
									<div>
										<strong style={{ fontSize: "150%" }}>
											{value.users.userName}XXXXXXXXXXXXX
										</strong>
										<div style={{ maxWidth: "300px", margin: "7% 0 0 0" }}>
											<p>About</p>
											<p>
												hiii, I am a full stack MERN developer, you can follow
												me see more about full stack especially about react
											</p>
										</div>
									</div>
									<div></div>
								</div>
							);
						})}
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Profile;
