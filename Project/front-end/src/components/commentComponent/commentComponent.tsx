import React, { useEffect } from "react";
import { Comment, Tooltip, Avatar } from "antd";
import moment from "moment";
import "./comment.css";
import { deleteComment } from "../../services/services";
import { useDispatch, useSelector } from "react-redux";
interface Props {
	comment?: any;
}
const CommentComponent = ({ comment }: Props) => {
	let user = localStorage.getItem("user");

	const dispatch = useDispatch();
	// const { searchedPost, commentLength } = useSelector(
	// 	(state: any) => state.posts
	// );

	const commentDelete = async () => {
		let res = await deleteComment(comment._id);
		dispatch(res);
	};

	return (
		<div className="comment-main-div">
			<Comment
				className="comment-div"
				author={<a>{comment.user.userName}</a>}
				avatar={
					<Avatar
						src="https://eshendetesia.com/images/user-profile.png"
						alt="Han Solo"
					/>
				}
				content={
					<div>
						<p>{comment.comment}</p>
						<div className="d-flex justify-content-end">
							<div className="icons">
								<small className="like-count">{comment.likes.length}</small>
								<i className="fa fa-thumbs-o-up color" aria-hidden="true"></i>
							</div>
							{comment.user.userName === user && (
								<div className="icons" onClick={commentDelete}>
									<i
										className="fa fa-trash delete-color"
										aria-hidden="true"
									></i>
								</div>
							)}
						</div>
					</div>
				}
				datetime={
					<Tooltip
						title={moment(comment.createdAt).format("YYYY-MM-DD HH:mm:ss")}
					>
						<span>{moment(comment.createdAt).fromNow()}</span>
					</Tooltip>
				}
			/>
		</div>
	);
};

export default CommentComponent;
