import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle<{
	theme: {
		body: string;
		text: string;
		menu: string;
		actions: string;
		commenthover: string;
		titletagCommentIcons: string;
		themeShadow: string;
		componentColor: string;
		atomColor: string;
	};
}>`
    body{
        background:${({ theme }) => theme.body};
        color:${({ theme }) => theme.text};
        transition: all .5s linear;
    }
    .navbar{
        background:${({ theme }) => theme.menu} !important;
        transition: all .5s linear;
    }
    
    .link-tag{
        color:${({ theme }) => theme.titletagCommentIcons};
    }
    .search-button{
        background:${({ theme }) => theme.titletagCommentIcons};
        color:${({ theme }) => theme.body};
    }
    .post-card{
        background:${({ theme }) => theme.componentColor};
        color:${({ theme }) => theme.text};
    }
    .ant-card-body{
        background:${({ theme }) => theme.componentColor};
        color:${({ theme }) => theme.text};
        transition: all .5s linear;
    }
    .ant-card-meta-title{
        color:${({ theme }) => theme.text};
    }
    .ant-card-meta-description{
        color:${({ theme }) => theme.text};
    }
    .ant-card-actions{
        background:${({ theme }) => theme.body};
        color:${({ theme }) => theme.text};
    }
    .ant-card-actions li{
        color:${({ theme }) => theme.actions}
    }
    .anticon.anticon-comment[style]{
        color:${({ theme }) => theme.actions} !important;
        transition: all .5s linear;
    }
    .comment-body{
        background:${({ theme }) => theme.body};
        transition: all .5s linear;
    }
    .addPost-container {
        background:${({ theme }) => theme.componentColor};
        color:${({ theme }) => theme.text};
        transition: all .5s linear;
    }

    .comment-section{
        background:${({ theme }) => theme.body};
        color:${({ theme }) => theme.text};
        transition: all .5s linear;
    }
    .add-comment{
        color:black;
    }
    .comment-main-div:hover{
        background:${({ theme }) => theme.commenthover};
        color:${({ theme }) => theme.text};
    }
    .ant-comment-content-author-name{
        color:${({ theme }) => theme.text};
    }
    .ant-comment-content-author-name:hover{
        background:${({ theme }) => theme.commenthover};
    }
    .color{
        color:${({ theme }) => theme.titletagCommentIcons};
    }
    .fa-paper-plane{
        color:${({ theme }) => theme.titletagCommentIcons};
    }
    .ant-popover-inner-content{
        background:${({ theme }) => theme.body};
    }
    .profile-maindiv {
        background:${({ theme }) => theme.componentColor};
    }
    .addPost-button  {
        background-color: ${({ theme }) => theme.atomColor} !important;
    }
    .color{
        color: ${({ theme }) => theme.atomColor} !important;
    }
    .positioning{
        color: ${({ theme }) => theme.atomColor} !important;
    }
    .edit-tag{
        background-color: ${({ theme }) => theme.atomColor} !important;
    }
    .site-tag-plus{
        border:1px dashed  ${({ theme }) => theme.atomColor} !important;
        color: ${({ theme }) => theme.atomColor} !important;
    }
    .accordion-button {
        color: ${({ theme }) => theme.titletagCommentIcons} !important;
        background-color:${({ theme }) => theme.componentColor} !important;
    }

    .accordion-button:not(.collapsed) {
        background-color:${({ theme }) => theme.componentColor} !important;
    }
    .accordion-body{
        background-color:${({ theme }) => theme.componentColor} !important;
    }
`;

export const lightTheme = {
	body: "whitesmoke",
	componentColor: "white",
	atomColor: "#534ebf",
	text: "#121212",
	menu: "white",
	actions: "rgba(0, 0, 0, 0.45)",
	commenthover: "white",
	titletagCommentIcons: "#534ebf",
};

export const darkTheme = {
	body: "#121212",
	text: "#fff",
	atomColor: "#3027e2",
	menu: "#333",
	componentColor: "#333",
	actions: "white",
	commenthover: "#333",
	titletagCommentIcons: "white",
};
