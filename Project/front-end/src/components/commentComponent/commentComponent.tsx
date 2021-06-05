import React, { useEffect } from "react";
import { Comment, Tooltip, Avatar } from "antd";
import moment from "moment";
import "./comment.css";
interface Props {
  comment?: any;
}
const CommentComponent = (props: Props) => {
  return (
    <div className="comment-main-div">
      <Comment
        className="comment-div"
        author={<a>{props.comment.user.userName}</a>}
        avatar={
          <Avatar
            src="https://eshendetesia.com/images/user-profile.png"
            alt="Han Solo"
          />
        }
        content={
          <div>
            <p>{props.comment.comment}</p>
            <div className="d-flex justify-content-end">
              <div className="likes">
				<small className="like-count">Likes: 5</small>
			  <i className="fa fa-thumbs-o-up color" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        }
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
