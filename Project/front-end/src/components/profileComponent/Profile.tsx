import React, { useEffect } from "react";
import { Divider, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { currentUserProfile, currentUserPosts, searchedUserPosts, searchedUserProfile } from "../../services/services";
import "./profile.css";
import { Empty } from "antd";
import CardComponent from "../cardComponent/card";
import WcIcon from "@material-ui/icons/Wc";
import EmailIcon from "@material-ui/icons/Email";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useParams } from "react-router";
function Profile() {
	const dispatch = useDispatch();
	const params:any=useParams()
	const state = useSelector((state: any) => state.user);
	const postsState = useSelector((state:any) => state.posts)
	useEffect(() => {
		if(params.userName){
			searchedUserProfile(params.userName).then((res:any) => {
				dispatch(res);
			});
			searchedUserPosts(params.userName).then((res:any) => {
				dispatch(res);
			});
		}else{
			currentUserProfile(localStorage.getItem("userID")).then((res) => {
				dispatch(res);
			});
			currentUserPosts(localStorage.getItem("userID")).then((res) => {
				dispatch(res);
			});
		}
	}, [postsState.postLength]);

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
								<AccountCircleIcon className="position-icon"></AccountCircleIcon>
								<span className="user-name">{state.userProfile.userName}</span>
							</div>
							<div className="d-flex justify-content user-details-div">
								<div style={{ marginRight: "30px",marginLeft:"12px" }}>
									<EmailIcon style={{ color: "gray" }}></EmailIcon>
									<span className="user-details">
										{state.userProfile.email}
									</span>
								</div>
								<div>
									<WcIcon style={{ color: "gray"}}></WcIcon>
									<span className="user-details">
										{state.userProfile.gender}
									</span>
								</div>
							</div>
							<div className="user-details-div" style={{marginLeft:"12px" }}>
								<p className="user-details">{state.userProfile.about}</p>
							</div>
						</div>
					</div>
				</div>
				
			</div>
			<Divider orientation="center" style={{margin:"50px 0px",fontSize:"30px"}}>My Posts</Divider>
			<div className="main-container">
				<div className="posts-div">
					{!state.userPosts.length && <Empty style={{ margin: "10% auto" }} />}
					{state.userPosts.map((value: any, index: any) => {
						return (
							<div className="post-card">
								<CardComponent
									data={value}
									flag={state.loggedInUser}
									type={"user"}
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
