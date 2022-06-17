import actions from "./actions";

const initialState = {
  PeopleList: [],
  followingPeopleList: [],
  followersPeopleList: [],
  PeopleProfile:[]
};

const PeopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_PEOPLE_LIST:
      return {
        ...state,
        PeopleList: action.payload
      }
    case actions.SET_FOLLOWING_PEOPLE_LIST:
      return {
        ...state,
        followingPeopleList: action.payload
      }
    case actions.SET_FOLLOWERS_PEOPLE_LIST:
      return {
        ...state,
        followersPeopleList: action.payload
      }
      case actions.SET_PEOPLE_PROFILE:
        return {
          ...state,
          PeopleProfile: action.payload
        }
      
    default:
      return state;
  }
};

export default PeopleReducer;