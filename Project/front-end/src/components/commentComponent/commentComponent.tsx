import React, { useEffect } from "react";
import { Comment, Tooltip, Avatar } from "antd";
import moment from "moment";
import "./comment.css";
import { deleteComment,likeCommentApi } from "../../services/services";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import {  Zoom } from 'react-toastify';
interface Props {
	comment?: any;
}
const CommentComponent = ({ comment }: Props) => {
	let user = localStorage.getItem("user");
	console.log("comment",comment)
	const dispatch = useDispatch();
	// const { searchedPost, commentLength } = useSelector(
	// 	(state: any) => state.posts
	// );

	const commentDelete = async () => {
		let res = await deleteComment(comment._id);
		dispatch(res);
		toast.error('Comment deleted successfully', {
			position: "top-center",
			autoClose: 2000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			transition:Zoom,
			});
	};
	const liked = () => {
		let userId = localStorage.getItem("userID");
		for (let i of comment.likes) {
			let id = i.user;
			if (id === userId) {
				return true;
			}
		}
		return false;
	};

	const commentLike = async () => {
		let res = await likeCommentApi(comment._id);
		dispatch(res);
	};

	return (
		<div className="comment-main-div">
			<ToastContainer />
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
							<div className="icons" onClick={commentLike}>
								<span className="like-count ">{comment.likes.length}</span>
								{
									liked()?<i className="fa fa-thumbs-up color" aria-hidden="true"></i>:<i className="fa fa-thumbs-o-up color" aria-hidden="true"></i>
								}
								
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