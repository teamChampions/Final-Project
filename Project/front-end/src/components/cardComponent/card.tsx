import React from "react";
import { Card, Avatar, Divider } from "antd";
import "./card.css"
import { DislikeFilled, CommentOutlined, LikeFilled } from "@ant-design/icons";
interface Props {
  data: any;
  flag: any;
}

export default function CardComponent({ data, flag }: Props) {
  const { Meta } = Card;
  return (
    <Card
      key={data._id}
      cover={data.image ? <img alt={data.category} src={`http://localhost:5000${data.image}`} /> : ""}
      actions={[
        <span>
          <LikeFilled style={{ fontSize: "25px" }} />
          {" 1"}
        </span>,
        <CommentOutlined key="edit" style={{ fontSize: "25px" }} />,

        <DislikeFilled style={{ fontSize: "25px" }} />,
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
