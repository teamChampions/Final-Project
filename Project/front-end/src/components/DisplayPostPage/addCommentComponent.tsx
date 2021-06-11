import { Card, Avatar, Divider, Empty } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPostDetails } from "../../services/services";
import CommentComponent from "../commentComponent/commentComponent";

import "./addComment.css";
interface Props {}
interface params {
  postid: any;
}

export default function AddCommentComponent({}: Props) {
  const { Meta } = Card;
  const { postid } = useParams<params>();
  console.log(postid);
  const dispatch = useDispatch();
  const { searchedPost } = useSelector((state: any) => state.posts);
  useEffect(() => {
    console.log("in useeffect", postid);
    getPostDetails(postid)
      .then((res) => {
        dispatch(res);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log("in add comment", searchedPost);
  return (
    <div>
      {searchedPost !== null ? (
        <div className="comment-body">
          <div className="conatiner">
            <div className="row">
              <div className="col-sm-6 post-div">
                <div className=" post-image-section">
                  <img
                    className="image"
                    alt="image"
                    src={`http://localhost:5000${searchedPost.image}`}
                  ></img>
                </div>
              </div>
              <div className="col-sm-6">
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
                      ></input>
                    </div>
                    <div className="container">
                      <i
                        className="fa fa-paper-plane positioning"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                  {searchedPost.comments.length!==0?searchedPost.comments.map((comment: any) => {
                    return (
                      <CommentComponent comment={comment}></CommentComponent>
                    );
                  }):<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={
                    <span>
                      No Comments yet
                    </span>
                  }/>}
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
