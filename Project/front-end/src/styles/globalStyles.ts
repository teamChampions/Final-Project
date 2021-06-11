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
        boxShadow:string;
        border:string;
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
        box-shadow:${({ theme }) => theme.boxShadow}  !important;
        border:${({ theme }) => theme.border} !important;
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
        border:${({ theme }) => theme.border} !important;
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
    span{
        color: ${({ theme }) => theme.text};

    }
    .post-owner,.image{
        box-shadow:${({ theme }) => theme.boxShadow}
    }
    .ant-card{
       border:${({ theme }) => theme.border} !important;
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
    boxShadow: "0px 0px 4px 0px rgb(200, 200, 200)",
    border:"none",
};

export const darkTheme = {
	body: "#0d1117",
	text: "#fff",
	atomColor: "white",
	menu: "#161b22",
	componentColor: "#161b22",
	actions: "white",
	commenthover: "#161b22",
	titletagCommentIcons: "white",
    boxShadow:"none",
    border:"1px solid #30363d"
};
