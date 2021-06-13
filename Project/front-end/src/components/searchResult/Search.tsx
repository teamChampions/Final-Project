import { Avatar } from "@material-ui/core";
import { List } from "antd";
import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { getUsersByName } from "../../services/services";

interface Props {}

export default function Search({}: Props) {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const dispatch = useDispatch();
  const history=useHistory()
  const userState = useSelector((state: any) => state.user);
  const name = params.get("q")?.slice(1);
  useEffect(() => {
    getUsersByName(name).then((res) => {
      dispatch(res);
    });
  }, []);
  const handleClick=async()=>{
    history.push("/profile/"+name)
  }
  return (
    <div>
        <h1>Searched Users</h1>
          <List
            itemLayout="horizontal"
            dataSource={userState.searchedUsers}
            renderItem={(item:any) => (
              <List.Item onClick={handleClick}>
                <List.Item.Meta
                  avatar={<Avatar
                    style={{
                      backgroundColor: "#534edf",
                      float: "right",
                      cursor: "pointer",
                    }}
                    >{`${item.userName?.split("")[0].toUpperCase()}`}</Avatar>}
                  title={<div>{item.userName}</div>}
                  description={`${item.email}`}
                />
              </List.Item>
            )}
          />
    </div>
  );
}
