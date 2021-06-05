import React, { useEffect } from "react";
import { Card, Empty } from "antd";

import CommentComponent from "../commentComponent/commentComponent";
import { useDispatch, useSelector } from "react-redux";
import { displayAllPosts, getPostsByCategory } from "../../services/services";
import CardComponent from "../cardComponent/card";
/* import AddComment from "./addComment"; */

export default function PostComponent() {
 
  let result: any;
  const dispatch = useDispatch();
  const state: any = useSelector((state: any) => state.posts);
    result = async () => {
      let data = await displayAllPosts();
      dispatch(data);
    };
  useEffect(() => {
    result();
  }, []);

  console.log(state.posts);

  return (
    <div>
      {!state.posts.length && <Empty style={{ margin: "10% auto" }} />}
      {state.posts.map((value: any, index: any) => {
        return (
          <div className="post-card">
            <CardComponent data={value} flag={state.loggedInUser}></CardComponent>
          </div>
        );
      })}
    </div>
  );
}
