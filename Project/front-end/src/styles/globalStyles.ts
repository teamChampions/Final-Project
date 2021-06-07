import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle<{theme:{
                                                body:string,
                                                text:string,
                                                menu:string,
                                                actions:string
                                                commenthover:string,
                                                titletagCommentIcons:string}}>`
    body{
        background:${({theme})=>theme.body};
        color:${({theme})=>theme.text};
        transition: all .5s linear;
    }
    .navbar{
        background:${({theme})=>theme.menu} !important;
        transition: all .5s linear;
    }
    
    .link-tag{
        color:${({theme})=>theme.titletagCommentIcons};
    }
    .search-button{
        background:${({theme})=>theme.titletagCommentIcons};
        color:${({theme})=>theme.body};
    }
    .post-card{
        background:${({theme})=>theme.body};
        color:${({theme})=>theme.text};
    }
    .ant-card-body{
        background:${({theme})=>theme.body};
        color:${({theme})=>theme.text};
        transition: all .5s linear;
    }
    .ant-card-meta-title{
        color:${({theme})=>theme.text};
    }
    .ant-card-meta-description{
        color:${({theme})=>theme.text};
    }
    .ant-card-actions{
        background:${({theme})=>theme.body};
        color:${({theme})=>theme.text};
    }
    .ant-card-actions li{
        color:${({theme})=>theme.actions}
    }
    .anticon.anticon-comment[style]{
        color:${({theme})=>theme.actions} !important;
        transition: all .5s linear;
    }
    .comment-body{
        background:${({theme})=>theme.body};
        transition: all .5s linear;
    }
    .comment-section{
        background:${({theme})=>theme.body};
        color:${({theme})=>theme.text};
        transition: all .5s linear;
    }
    .add-comment{
        color:black;
    }
    .comment-main-div:hover{
        background:${({theme})=>theme.commenthover};
        color:${({theme})=>theme.text};
    }
    .ant-comment-content-author-name{
        color:${({theme})=>theme.text};
    }
    .ant-comment-content-author-name:hover{
        background:${({theme})=>theme.commenthover};
    }
    .color{
        color:${({theme})=>theme.titletagCommentIcons};
    }
    .fa-paper-plane{
        color:${({theme})=>theme.titletagCommentIcons};
    }
    .ant-popover-inner-content{
        background:${({theme})=>theme.body};
    }

`;

export const lightTheme = {
    body:"#fff",
    text:"#121212",
    menu:"floralwhite",
    actions:"rgba(0, 0, 0, 0.45)",
    commenthover:"floralwhite",
    titletagCommentIcons:"#534ebf"
}

export const darkTheme = {
    body:"#121212",
    text:"#fff",
    menu:"#333",
    actions:"floralwhite",
    commenthover:"#333",
    titletagCommentIcons:"linen",
}