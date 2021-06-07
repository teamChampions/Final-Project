import React, { useState } from "react";
import {
  Button,
  Container,
  Icon,
  makeStyles,
  TextField,
} from "@material-ui/core";
import TextArea from "antd/lib/input/TextArea";
import HashTagsComponent from "./hashTagsComponent";
import "./addPost.css";
interface Props {}

export const AddPostComponent = (props: Props) => {
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const handleChange = (e: any) => {
    setDescription(e.target.value);
  };
  const useStyles = makeStyles((theme) => ({
    margin: {
      display: "block",
      margin: "1vw 0vw",
      width: 250,
      marginLeft: "auto",
      marginRight: "auto",
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <form>
        <div className="addPost-container">
          <div>
            <TextArea rows={3} onChange={handleChange} value={description} />
          </div>
          <div className="addPost-tags">
            <HashTagsComponent></HashTagsComponent>
          </div>
          <Button
            variant="contained"
            color="primary"
            className="addPost-button"
          >
            <div className="d-flex">
              <div>{"Post"}</div>
              <div className="icon-container">
                <i className="fa fa-paper-plane icon" aria-hidden="true"></i>
              </div>
            </div>
          </Button>
        </div>
      </form>
    </div>
  );
};
