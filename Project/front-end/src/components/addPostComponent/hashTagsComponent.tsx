import { Tag, Input, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./hashTagComponent.css";
import React, { ReactElement, useRef, useState } from "react";

interface Props {}

export default function HashTagsComponent({}: Props): ReactElement {
	let inputRef = useRef<HTMLInputElement>(null);
	let editInputRef = useRef<HTMLInputElement>(null);
	const [tagState, setTagState] = useState({
		tags: ["Tag 2", "Tag 3"],
		inputVisible: false,
		inputValue: "",
		editInputIndex: -1,
		editInputValue: "",
	});
	const handleClose = (removedTag: any) => {
		const tags = tagState.tags.filter((tag) => tag !== removedTag);
		console.log(tags);
		setTagState({ ...tagState, tags });
	};
	const showInput = () => {
		setTagState({ ...tagState, inputVisible: true });
		inputRef.current?.focus();
	};
	const handleInputChange = (e: any) => {
		setTagState({ ...tagState, inputValue: e.target.value });
	};
	const handleInputConfirm = () => {
		let { inputValue, tags } = tagState;
		if (inputValue && tags.indexOf(inputValue) === -1) {
			tags = [...tags, inputValue];
		}
		console.log(tags);
		setTagState({
			...tagState,
			tags,
			inputVisible: false,
			inputValue: "",
		});
	};
	const handleEditInputChange = (e: any) => {
		setTagState({ ...tagState, editInputValue: e.target.value });
	};
	const handleEditInputConfirm = () => {
		let { tags, editInputIndex, editInputValue } = tagState;
		const newTags = [...tags];
		newTags[editInputIndex] = editInputValue;
		setTagState({
			...tagState,
			tags: newTags,
			editInputIndex: -1,
			editInputValue: "",
		});
	};
	const saveInputRef = (input: any) => {
		inputRef = input;
	};

	const saveEditInputRef = (input: any) => {
		editInputRef = input;
	};

	return (
		<>
			{tagState.tags.map((tag: any, index: any) => {
				if (tagState.editInputIndex === index) {
					return (
						<Input
							ref={saveEditInputRef}
							key={tag}
							size="small"
							className="tag-input"
							value={tagState.editInputValue}
							onChange={handleEditInputChange}
							onBlur={handleEditInputConfirm}
							onPressEnter={handleEditInputConfirm}
						/>
					);
				}

				const isLongTag = tag.length > 20;

				const tagElem = (
					<Tag
						className="edit-tag"
						key={tag}
						closable={index !== -1}
						onClose={() => handleClose(tag)}
					>
						<span
							onDoubleClick={(e: any) => {
								if (index !== -1) {
									setTagState({
										...tagState,
										editInputIndex: index,
										editInputValue: tag,
									});
									editInputRef.current?.focus();
									e.preventDefault();
								}
							}}
						>
							{isLongTag ? `${tag.slice(0, 20)}...` : tag}
						</span>
					</Tag>
				);
				return isLongTag ? (
					<Tooltip title={tag} key={tag}>
						{tagElem}
					</Tooltip>
				) : (
					tagElem
				);
			})}
			{tagState.inputVisible && (
				<Input
					ref={saveInputRef}
					type="text"
					size="small"
					className="tag-input"
					value={tagState.inputValue}
					onChange={handleInputChange}
					onBlur={handleInputConfirm}
					onPressEnter={handleInputConfirm}
				/>
			)}
			{!tagState.inputVisible && (
				<Tag className="site-tag-plus" onClick={showInput}>
					<span style={{ marginRight: "2px", paddingBottom: "5px" }}>
						<PlusOutlined />
					</span>
					<span>New Tag</span>
				</Tag>
			)}
		</>
	);
}
