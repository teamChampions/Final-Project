import React, { useEffect } from "react";
import { Comment, Tooltip, Avatar } from "antd";
import moment from "moment";
interface Props {
	comment: any;
}

const CommentComponent = (props: Props) => {
	return (
		<div style={{ paddingTop: "10px" }}>
			<Comment
				// actions={actions}
				style={{
					border: "none",
					borderRadius: "5px",
					padding: "5px",
					boxShadow: "0px 0px 4px 0px rgb(200, 200, 200)",
				}}
				author={<a>{props.comment.user.userName}</a>}
				avatar={
					<Avatar
						src="https://eshendetesia.com/images/user-profile.png"
						alt="Han Solo"
					/>
				}
				content={<p>{props.comment.comment}</p>}
				datetime={
					<Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
						<span>{moment().fromNow()}</span>
					</Tooltip>
				}
			/>
		</div>
	);
};

export default CommentComponent;
