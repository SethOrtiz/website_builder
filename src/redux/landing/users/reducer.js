import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  LOADING_SIGNUP,
  LOADING_SIGNIN
} from "./actions";
const initialState = {
  authenticated: false,
  userLoading: false,
  signInLoading: false,
  signInFailed: false,
  signUploading: false,
  signUpFailed: false,
  forgotPasswordOpen: false
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_USER:
      return {
        authenticated: true,
        loading: false,
        ...action.payload
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true
      };
    case LOADING_SIGNUP:
      return {
        ...state,
        signInLoading: true,
        signInFailed: false
      };

    case LOADING_SIGNIN:
      return {
        ...state,
        signUploading: true,
        signUpFailed: false
      };
    default:
      return state;
  }
}
export default authReducer;
