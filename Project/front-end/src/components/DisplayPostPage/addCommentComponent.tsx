import { Card, Avatar, Divider } from "antd";
import CommentComponent from "../commentComponent/commentComponent";

import "./addComment.css";
interface Props {}

export default function AddCommentComponent({}: Props) {
  const { Meta } = Card;

  console.log("in add comment");
  return (
    <div className="comment-body">
      <div className="conatiner">
        <div className="row">
          <div className="col-sm-6 post-div">
            <div className=" post-image-section">
              <img
                className="image"
                alt="image"
                src="https://www.noanxiety.com/relaxing-links/relaxing-mountain-landscape.jpg"
              ></img>
            </div>
          </div>
          <div className="col-sm-6">
            <Card className="post-owner">
              <Meta
                avatar={
                  <Avatar src="https://eshendetesia.com/images/user-profile.png" />
                }
                title="Supritha"
                description="Post"
              />
              <div className="d-flex justify-content-end">
                  <div className="likes"><i className="fa fa-thumbs-up color" aria-hidden="true"></i></div>
                  <div className="comments"><i className="fa fa-comments color" aria-hidden="true"></i></div>
              </div>
            </Card>
            <div className="comment-section">
              <div className="add-comment">
                <div>
                  <input type="text" className="input-comment"></input>
                </div>
                <div className="container">
                  <i className="fa fa-paper-plane positioning" aria-hidden="true"></i>
                </div>
              </div>
              <CommentComponent
                comment={{
                  user: { userName: "champions" },
                  comment: "our comment",
                }}
              ></CommentComponent>
              <CommentComponent
                comment={{
                  user: { userName: "champions" },
                  comment: "our comment",
                }}
              ></CommentComponent>
              <CommentComponent
                comment={{
                  user: { userName: "champions" },
                  comment: "our comment",
                }}
              ></CommentComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
