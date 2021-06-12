import { Card, Avatar, Empty } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addComment, getPostDetails } from "../../services/services";
import { Image } from "antd";
import CommentComponent from "../commentComponent/commentComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./addComment.css";
interface Props {}
interface params {
	postid: any;
}

export default function AddCommentComponent({}: Props) {
	const { Meta } = Card;
	const { postid } = useParams<params>();

	const [comment, setcomment] = useState<any>({
		comment: "",
		post: "",
	});
	const dispatch = useDispatch();
	const { searchedPost, commentLength } = useSelector(
		(state: any) => state.posts
	);

	const commentInput = (e: any) => {
		setcomment({ comment: e.target.value, post: postid });
	};

	const commentSubmit = async () => {
		try {
			let res = await addComment(comment);
			dispatch(res);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		getPostDetails(postid)
			.then((res) => {
				dispatch(res);
			})
			.catch((err) => console.log(err));
	}, [commentLength]);

	return (
		<div>
			{searchedPost !== null ? (
				<div className="comment-body">
					<div className="conatiner">
						<div className="row">
							<div className="col-sm-6 post-div">
								<div className=" post-image-section">
									<Image
										className="image"
										src={`http://localhost:5000${searchedPost.image}`}
									/>
								</div>
							</div>
							<div className="col-sm-6 post-details">
								<Card className="post-owner">
									<Meta
										avatar={
											<Avatar src="https://eshendetesia.com/images/user-profile.png" />
										}
										title={searchedPost.users.userName}
										description={searchedPost.description}
									/>
									<div className="d-flex justify-content-end">
										<div className="likes">
											<i
												className="fa fa-thumbs-up color"
												aria-hidden="true"
											></i>
											<span className="likes-comments-count color">
												{searchedPost.likes.length}
											</span>
										</div>
										<div className="comments">
											<i
												className="fa fa-comments color"
												aria-hidden="true"
											></i>

											<span className="likes-comments-count color">
												{searchedPost.comments.length}
											</span>
										</div>
									</div>
								</Card>
								<div className="comment-section">
									<div className="add-comment">
										<div>
											<input
												type="text"
												placeholder=" Add a Comment..."
												className="input-comment"
												onChange={commentInput}
											></input>
										</div>
										<div className="post-comment-icon" onClick={commentSubmit}>
											<i
												className="fa fa-paper-plane positioning"
												aria-hidden="true"
											></i>
										</div>
									</div>
									{searchedPost.comments.length !== 0 ? (
										searchedPost.comments.map((comment: any) => {
											return (
												<CommentComponent comment={comment}></CommentComponent>
											);
										})
									) : (
										<Empty
											image={Empty.PRESENTED_IMAGE_SIMPLE}
											description={
												<span className="no-comments">No Comments yet</span>
											}
										/>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
		</div>
	);
}
