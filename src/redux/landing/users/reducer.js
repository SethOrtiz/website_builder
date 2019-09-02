import {
  LOADING_SIGNUP,
  SIGNUP_ERROR,
  SIGNUP_SUCCESSFUL,
  LOADING_SIGNIN,
  SIGNIN_ERROR,
  SIGNIN_SUCCESSFUL
} from "./actions";
const initialState = {
  auth: "",
  signInLoading: false,
  signInError: false,
  signUploading: false,
  signUpError: false
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_SIGNUP:
      return {
        ...state,
        signInLoading: true,
        signInError: false
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        signInLoading: false,
        signInError: true
      };
    case SIGNUP_SUCCESSFUL:
      return {
        ...state,
        signInLoading: false,
        signInError: false,
        auth: action.payload
      };
    case LOADING_SIGNIN:
      return {
        ...state,
        signUploading: true,
        signUpError: false
      };
    case SIGNIN_ERROR:
      return {
        ...state,
        signUploading: false,
        signUpError: true
      };
    case SIGNIN_SUCCESSFUL:
      return {
        ...state,
        signUploading: false,
        signUpError: false,
        auth: action.payload
      };
    default:
      return state;
  }
}
export default authReducer;

