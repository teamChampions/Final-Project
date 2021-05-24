import React, { useEffect, useContext } from "react";
import { Card, Avatar, Empty, Divider } from "antd";
import { DislikeFilled, CommentOutlined, LikeFilled } from "@ant-design/icons";
import { displayAllPosts, getPostsByCategory } from "../utils/util";
import CommentComponent from "./commentComponent";
import { Context } from "../context/Context";
import AddComment from "./addComment";

export default function CardComponent() {
	const { Meta } = Card;

	const { state, dispatch } = useContext(Context);
	let result: any;
	let data: any;

	if (!state.searchParams) {
		result = async () => {
			let data = await displayAllPosts();
			dispatch(data);
		};
		data = state.posts;
	} else {
		result = async () => {
			let data = await getPostsByCategory(state.searchParams);
			dispatch(data);
		};
		data = state.selectedPosts;
	}
	useEffect(() => {
		data = result();
	}, [state.searchParams, state.commentLength]);

	console.log(state.posts);

	return (
		<div>
			{!data.length && <Empty style={{ margin: "10% auto" }} />}
			{data.map((value: any, index: any) => {
				return (
					<div className="post-card">
						<Card
							key={index}
							cover={
								value.image ? (
									<img alt={value.category} src={value.image} />
								) : (
									""
								)
							}
							actions={[
								<span>
									<LikeFilled style={{ fontSize: "25px" }} />
									{" 1"}
								</span>,
								<CommentOutlined key="edit" style={{ fontSize: "25px" }} />,

								<DislikeFilled style={{ fontSize: "25px" }} />,
							]}
						>
							<Meta
								avatar={
									<Avatar src="https://eshendetesia.com/images/user-profile.png" />
								}
								title={value.users.userName}
								description={value.description}
							/>
							{state.loggedIn && <Divider />}
							{state.loggedIn && (
								<Meta
									description={
										<AddComment users={state.user} post={value._id} />
									}
								/>
							)}
						</Card>
						{value.comments.map((comment: any) => (
							<CommentComponent key={comment._id} comment={comment} />
						))}
					</div>
				);
			})}
		</div>
	);
}
