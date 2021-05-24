import { Avatar, Comment, Form, Button, Input } from "antd";
import React, { useState, useContext } from "react";
import { Context } from "../context/Context";
import { addComment } from "../utils/util";

interface Props {
	users: any;
	post: any;
}

const AddComment = (props: Props) => {
	const { TextArea } = Input;

	const { dispatch } = useContext(Context);

	const [value, setvalue] = useState();

	const setData = (e: any) => {
		setvalue(e.target.value);
	};

	const onSubmit = async () => {
		const data = { post: props.post, comment: value };
		let res = await addComment(data);
		dispatch(res);
		return;
	};

	return (
		<div>
			<Comment
				avatar={
					<Avatar src="https://eshendetesia.com/images/user-profile.png" />
				}
				author={props.users}
				content={
					<>
						<Form.Item>
							<TextArea rows={1} onChange={setData} />
						</Form.Item>
						<Form.Item>
							<Button
								htmlType="submit"
								// loading={submitting}
								onClick={onSubmit}
								type="primary"
							>
								Add Comment
							</Button>
						</Form.Item>
					</>
				}
			/>
		</div>
	);
};

export default AddComment;