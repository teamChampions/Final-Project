import {
  ALL_POSTS,
  LOGGED_IN,
  LOGGED_OUT,
  USER_PROFILE,
  POST_TAGS,
  POST_DETAILS,
  ADD_COMMENT,
  DELETE_COMMENT,
  LIKE_POST,
} from "../store/constants";

const initialStateOfUser = {
  loggedInUser: "",
  userProfile: [],
};
const userReducer = (currentState = initialStateOfUser, action: any): any => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...currentState,
        loggedInUser: action.payload,
      };
    case LOGGED_OUT:
      return {
        ...currentState,
        loggedInUser: action.payload,
      };
    case USER_PROFILE:
      return {
        ...currentState,
        userProfile: action.payload,
      };
    default:
      return currentState;
  }
};

const initialStateOfPost = {
  posts: [],
  searchedPost: null,
  commentLength: 0,
  searchParams: {},
  tags: [],
  postLikeLength: 0,
};

const postsReducer = (currentState = initialStateOfPost, action: any): any => {
  switch (action.type) {
    case ALL_POSTS:
      console.log(action.payload);
      return {
        ...currentState,
        posts: action.payload,
      };

    case POST_TAGS:
      return {
        ...currentState,
        tags: action.payload,
      };
    case POST_DETAILS:
      return {
        ...currentState,
        searchedPost: action.payload,
        commentLength: action.payload.comments.length,
				postLikeLength:action.payload.likes.length
      };

    case DELETE_COMMENT:
      return { ...currentState, commentLength: action.commentLength };

    case ADD_COMMENT:
      return { ...currentState, commentLength: action.commentLength };

    case LIKE_POST:
      return { ...currentState, postLikeLength: action.payload };
    default:
      return currentState;
  }
};

export { userReducer, postsReducer };
