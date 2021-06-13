import React, { useEffect } from "react";
import { Card, Avatar, Divider } from "antd";
import "./card.css";
import { DislikeFilled, CommentOutlined, LikeFilled } from "@ant-design/icons";
import { Image } from "antd";

import { useHistory } from "react-router";
import { likeApi } from "../../services/services";
import { useDispatch, useSelector } from "react-redux";
interface Props {
	data: any;
	flag: any;
}

export default function CardComponent({ data, flag }: Props) {
	const { Meta } = Card;
	const history = useHistory();
	const dispatch = useDispatch();

	const handleAddComment = (e: any) => {
		history.push(`/addComment/forPost/${data._id}`);
	};
	const likePost = async () => {
		let result = await likeApi(data._id);
		dispatch(result);
	};
	const liked = () => {
		let userId = localStorage.getItem("userID");
		for (let i of data.likes) {
			let id = i.user._id;

			if (id === userId) {
				return true;
			}
		}
		return false;
	};

	return (
		<Card
			key={data._id}
			cover={
				data.image ? (
					<Image className="image" src={`http://localhost:5000${data.image}`} />
				) : (
					""
				)
			}
			actions={[
				<span onClick={likePost}>
					{liked() ? (
						<i className="fa fa-thumbs-up icon-style" aria-hidden="true"></i>
					) : (
						<i className="fa fa-thumbs-o-up icon-style" aria-hidden="true"></i>
					)}
					<span className="post-info">{data.likes.length}</span>
				</span>,
				<span>
					<i
						className="fa fa-comments-o icon-style"
						title="Add comment"
						onClick={handleAddComment}
						aria-hidden="true"
					></i>
					<span className="post-info">{data.comments.length}</span>
				</span>,
			]}
		>
			<Meta
				avatar={
					<Avatar src="https://eshendetesia.com/images/user-profile.png" />
				}
				title={data.users.userName}
				description={data.description}
			/>
			{/* {flag !== "" ? <Divider /> : null} */}
		</Card>
	);
}
