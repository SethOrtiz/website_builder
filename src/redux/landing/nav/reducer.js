import {
  HANDLE_SIGNUP,
  HANDLE_SIGNIN,
  HANDLE_FORGOT_PASSWORD,
  HANDLE_HOME
} from "./actions";
const initialState = {
  signInOpen: false,
  signUpOpen: false,
  forgotPasswordOpen: false
};

function navReducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_SIGNIN:
      return {
        signInOpen: true,
        signUpOpen: false,
        forgotPasswordOpen: false
      };
    case HANDLE_SIGNUP:
      return {
        signInOpen: false,
        signUpOpen: true,
        forgotPasswordOpen: false
      };
    case HANDLE_FORGOT_PASSWORD:
      return {
        signInOpen: false,
        signUpOpen: false,
        forgotPasswordOpen: true
      };
    case HANDLE_HOME:
      return {
        signInOpen: false,
        signUpOpen: false,
        forgotPasswordOpen: false
      };
    default:
      return state;
  }
}
export default navReducer;
