import actions from "./actions";

const initialState = {
  post: [],
  userPost: [],
  feeds: []
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_POST_LIST:
      return {
        ...state,
        post: action.payload
      }
    case actions.SET_POST_LIST_USER_ID:
      return {
        ...state,
        userPost: action.payload
      }
    case actions.SET_FEEDS:
      return {
        ...state,
        feeds: action.payload
      }


    default:
      return state;
  }
};

export default PostReducer;