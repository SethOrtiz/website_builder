////////////// FETCH ACCESS DASHBOARD /////////////

export const LOADING_SIGNIN = "LOADING_SIGNIN";
export function loadingSignIn() {
  return {
    type: LOADING_SIGNIN
  };
}

export const SIGNIN_ERROR = "SIGNIN_ERROR";
export function signInFailed() {
  return {
    type: SIGNIN_ERROR
  };
}

export const SIGNIN_SUCCESSFUL = "SIGNIN_SUCCESSFUL";
export function signInSuccess(token) {
    return {
    type: SIGNIN_SUCCESSFUL,
    token
  };
}

///////////////////// ADD USER ////////////////////////

export const LOADING_SIGNUP = "LOADING_SIGNUP";
export function loadingSignUp() {
    return {
    type: LOADING_SIGNUP
  };
}

export const SIGNUP_ERROR = "SIGNUP_ERROR";
export function SignUpFailed() {
  return {
    type: SIGNUP_ERROR
  };
}

export const SIGNUP_SUCCESSFUL = "SIGNUP_SUCCESSFUL";
export function signUpSuccess(token) {
    return {
    type: SIGNUP_SUCCESSFUL,
    token
  };
}