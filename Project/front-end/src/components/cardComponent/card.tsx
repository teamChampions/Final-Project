import React from "react";
import { Card, Avatar, Divider } from "antd";
import "./card.css"
import { DislikeFilled, CommentOutlined, LikeFilled } from "@ant-design/icons";
import { useHistory } from "react-router";
interface Props {
  data: any;
  flag: any;
}

export default function CardComponent({ data, flag }: Props) {
  const { Meta } = Card;
  const history=useHistory()
  const handleAddComment=(e:any)=>{
    history.push("/addComment",{id:data._id})
  }
  return (
    <Card
      key={data._id}
      cover={data.image ? <img alt={data.category} src={`http://localhost:5000${data.image}`} /> : ""}
      actions={[
        <span>
          <i className="fa fa-thumbs-o-up size" aria-hidden="true"></i>
          <i className="fa fa-thumbs-up size" aria-hidden="true"></i>
        </span>,
        <CommentOutlined key="edit" style={{ fontSize: "28px" }} title="Add comment" onClick={handleAddComment} />,
        <i className="fa fa-thumbs-o-down size" aria-hidden="true"></i>,
        <i className="fa fa-thumbs-down size" aria-hidden="true"></i>
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
