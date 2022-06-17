import actions from "./actions";

const initialState = {
  UserDetails: [],
  isAuthenticated: false,
  loader: false,
  RegisterNavigate: false,
  loginMessage: ""
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_USER_DETAILS:
      return {
        ...state,
        UserDetails: action.payload
      }
    case actions.SET_AUTHETICATRION:
      return {
        ...state,
        isAuthenticated: action.payload
      }
    case actions.SET_LOADER:
      return {
        ...state,
        loader: action.payload
      }
    case actions.SET_REGISTER_NAVIGATE:
      return {
        ...state,
        RegisterNavigate: action.payload
      }
    case actions.SET_LOGIN_MESSAGE:
      return {
        ...state,
        loginMessage: action.payload
      }

    default:
      return state;
  }
};

export default AuthReducer;