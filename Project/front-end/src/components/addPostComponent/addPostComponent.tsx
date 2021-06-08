import React, { useState } from "react";
import {
  Button,
  Container,
  Icon,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { Upload, Button as UpButton } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import HashTagsComponent from "./hashTagsComponent";
import "./addPost.css";
interface Props {}

export const AddPostComponent = (props: Props) => {
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");

  const formData = new FormData();

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

  const [filePick, setfilePick] = useState();

  const fileByAntd = (e: any) => {
    console.log(e.file);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    formData.append("description", description);
    // formData.append("tags", tags);
  };

  return (
    <div className="fix-add-post">
      <div className="accordion my-accordian" id="accordionExample">
        <div className="accordion-item">
            <button
              className="accordion-button fas"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Add Post
            </button>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <form>
                <div className="addPost-container">
                  <div>
                    <TextArea
                      rows={3}
                      name="description"
                      onChange={handleChange}
                      placeholder="Enter Description/Question"
                      value={description}
                    />
                  </div>
                  <div className="addPost-tags">
                    <HashTagsComponent></HashTagsComponent>
                  </div>
                  <div className="upload-post-container">
                    <Upload
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture"
                      className="upload-list-inline"
                      onChange={fileByAntd}
                      // defaultFileList={[...fileList]}
                    >
                      <UpButton icon={<UploadOutlined />}>Upload</UpButton>
                    </Upload>
                  </div>
                  <Button
                    variant="contained"
                    color="primary"
                    className="addPost-button"
                  >
                    <div className="d-flex">
                      <div>{"Post"}</div>
                      <div className="icon-container">
                        <i
                          className="fa fa-paper-plane icon"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


