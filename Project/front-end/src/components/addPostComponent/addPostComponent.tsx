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
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../../services/services";
import AlertComponent from "../alertComponent";
interface Props {}

export const AddPostComponent = (props: Props) => {
	const [description, setDescription] = useState("");

	const formData = new FormData();

	const handleChange = (e: any) => {
		setDescription(e.target.value);
	};

	const state = useSelector((state: any) => state.posts);

	const dispatch = useDispatch();

	// const useStyles = makeStyles((theme) => ({
	// 	margin: {
	// 		display: "block",
	// 		margin: "1vw 0vw",
	// 		width: 250,
	// 		marginLeft: "auto",
	// 		marginRight: "auto",
	// 	},
	// }));
	// const classes = useStyles();

	const [filePick, setfilePick] = useState<any>({});
	const [Status, setStatus] = useState<any>({});
	const fileByAntd = (e: any) => {
		setfilePick(e.target.files[0]);
	};

	const onSubmit = async (e: any) => {
		e.preventDefault();
		formData.append("description", description);
		state.tags.forEach((element: any) => {
			formData.append("tags[]", element);
		});
		formData.append("image", filePick);
		try {
			const res = await addPost(formData);
			setStatus({
				message: "Posted successfully",
				type: "success",
				flag: true,
			});
		} catch (err) {
			setStatus({ message: err.message, type: "error", flag: true });
		}
	};

	return (
		<div className="fix-add-post">
			{Status.flag && (
				<AlertComponent message={Status.message} type={Status.type} />
			)}
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
										{/* <Upload
											action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
											listType="picture"
											className="upload-list-inline"
											onChange={fileByAntd}
											// defaultFileList={[...fileList]}
										>
											<UpButton icon={<UploadOutlined />}>Upload</UpButton>
										</Upload> */}
										<input type="file" onChange={fileByAntd}></input>
									</div>
									<Button
										variant="contained"
										color="primary"
										className="addPost-button"
										onClick={onSubmit}
									>
										<div className="d-flex">
											<div>Post</div>
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
