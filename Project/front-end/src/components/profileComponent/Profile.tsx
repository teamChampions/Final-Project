import React, { useEffect } from "react";
import { Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { currentUserProfile, currentUserPosts } from "../../services/services";
import "./profile.css";
import { Empty } from "antd";
import CardComponent from "../cardComponent/card";
import WcIcon from "@material-ui/icons/Wc";
import EmailIcon from "@material-ui/icons/Email";
function Profile() {
	const dispatch = useDispatch();

	const state = useSelector((state: any) => state.user);

	useEffect(() => {
		currentUserProfile(localStorage.getItem("userID")).then((res) => {
			dispatch(res);
		});
		currentUserPosts(localStorage.getItem("userID")).then((res) => {
			dispatch(res);
		});
	}, []);

	console.log("state.userProfile", state.userProfile);

	return (
		<div>
			<div className="container profile-card">
				<div className="row">
					<div className="col-sm-5">
						<div className="image-div">
							<Image
								className="profile-image"
								src="https://newevolutiondesigns.com/images/freebies/flowers-facebook-cover-preview-2.jpg"
								alt="profile"
							/>
						</div>
					</div>
					<div className="col-sm-7 profile-details-div">
						<div className="d-flex flex-column">
							<div className="user-details-div">
								{/* <AccountCircleIcon style={{color:"gray",fontSize:"27px"}}></AccountCircleIcon> */}
								<span className="user-name">{state.userProfile.userName}</span>
							</div>
							<div className="d-flex justify-content user-details-div">
								<div style={{ marginRight: "30px" }}>
									<EmailIcon style={{ color: "gray" }}></EmailIcon>
									<span className="user-details">
										{state.userProfile.email}
									</span>
								</div>
								<div>
									<WcIcon style={{ color: "gray" }}></WcIcon>
									<span className="user-details">
										{state.userProfile.gender}
									</span>
								</div>
							</div>
							<div className="user-details-div">
								<p className="user-details">{state.userProfile.about}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="main-container">
				<div className="posts-div">
					{!state.userPosts.length && <Empty style={{ margin: "10% auto" }} />}
					{state.userPosts.map((value: any, index: any) => {
						return (
							<div className="post-card">
								<CardComponent
									data={value}
									flag={state.loggedInUser}
								></CardComponent>
							</div>
						);
					})}
				</div>
			</div>

			{/*  <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="profile-maindiv">
              <div>
                <strong style={{ fontSize: "150%" }}>
                  {state.userProfile.userName}
                </strong>
                <div style={{ maxWidth: "300px", margin: "7% 0 0 0" }}>
                  <p>About</p>
                  <p>
                    hiii, I am a full stack MERN developer, you can follow me
                    see more about full stack especially about react
                  </p>
                </div>
              </div>
              <div></div>
            </div>
          </Col>
        </Row>
      </Container> */}
		</div>
	);
}

export default Profile;
