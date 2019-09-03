import {
  LOADING_SIGNUP,
  SIGNUP_FAILED,
  SIGNUP_SUCCESSFUL,
  LOADING_SIGNIN,
  SIGNIN_FAILED,
  SIGNIN_SUCCESSFUL,
} from "./actions";
const initialState = {
  token: "",
  signInLoading: false,
  signInFailed: false,
  signUploading: false,
  signUpFailed: false,
  signInOpen: false,
  signUpOpen: false,
  forgotPasswordOpen: false
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_SIGNUP:
      return {
        ...state,
        signInLoading: true,
        signInFailed: false
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        signInLoading: false,
        signInFailed: true
      };
    case SIGNUP_SUCCESSFUL:
      return {
        ...state,
        signInLoading: false,
        signInFailed: false,
        token: action.token
      };
    case LOADING_SIGNIN:
      return {
        ...state,
        signUploading: true,
        signUpFailed: false
      };
    case SIGNIN_FAILED:
      return {
        ...state,
        signUploading: false,
        signUpFailed: true
      };
    case SIGNIN_SUCCESSFUL:
      return {
        ...state,
        signUploading: false,
        signUpFailed: false,
        token: action.token
      };
    default:
      return state;
  }
}
export default authReducer;
