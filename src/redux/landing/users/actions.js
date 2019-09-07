// User reducer types

export const SET_UNAUTHENTICATED = 'SET_UNAUTHENTICATED';
export function setUnauthenticated() {
  return {
    type: SET_UNAUTHENTICATED 
  };
}

export const SET_AUTHENTICATED = 'SET_AUTHENTICATED';
export function setAuthenticated() {
  return {
    type: SET_AUTHENTICATED 
  };
}
export const SET_USER = 'SET_USER';
export function setUser(data) {
  return {
    type: SET_USER,
    data
  };
}

export const SET_ERRORS = 'SET_ERRORS';
export function setErrors(error) {
  return {
    type: SET_ERRORS,
    error
  };
}

export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export function clearErrors() {
  return {
    type: CLEAR_ERRORS
  };
}

export const LOADING_DATA = 'LOADING_DATA';
export function loadingData() {
  return {
    type: LOADING_DATA
  };
}


export const LOADING_USER = 'LOADING_USER';
export function loadingUser() {
  return {
    type: LOADING_USER
  };
}


export const LOADING_SIGNIN = "LOADING_SIGNIN";
export function loadingSignIn() {
  return {
    type: LOADING_SIGNIN
  };
}

export const LOADING_SIGNUP = "LOADING_SIGNUP";
export function loadingSignUp() {
    return {
    type: LOADING_SIGNUP
  };
}
