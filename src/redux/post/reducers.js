import actions from "./actions";

const initialState = {
  post: [],
  userPost: []
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


    default:
      return state;
  }
};

export default PostReducer;