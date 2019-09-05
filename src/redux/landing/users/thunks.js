import { API } from "../../../constants/api";
import { DASHBOARD } from "../../../constants/routes";
import axios from "axios";
import {
  loadingSignIn,
  loadingSignUp,
  setUnauthenticated,
  setUser,
  setErrors,
  clearErrors,
  loadingUser
} from "./actions";

const setAuthorizationHeader = token => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};

export const signUp = (newUserData, history) => dispatch => {
  dispatch(loadingSignUp());
  axios
    .post(`${API}/signup`, newUserData)
    .then(res => {
      setAuthorizationHeader(res.data.token);
      dispatch(getUserData());
      dispatch(clearErrors());
      console.log("Sign Up Successful");
      history.push(DASHBOARD);
    })
    .catch(err => {
      dispatch(setErrors(err.res.data));
    });
};

export const signIn = (userData, history) => dispatch => {
  dispatch(loadingSignIn());
  axios
    .post(`${API}/signin`, userData)
    .then(res => {
      setAuthorizationHeader(res.data.token);
      dispatch(getUserData());
      dispatch(clearErrors());
      history.push(DASHBOARD);
    })
    .catch(err => {
      dispatch(setErrors(err.response.data));
    });
};
export const signOut = () => dispatch => {
  localStorage.removeItem("FBIdToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch(setUnauthenticated());
};

export const getUserData = () => dispatch => {
  dispatch(loadingUser());
  axios
    .get(`${API}/user`)
    .then(res => {
      dispatch(setUser(res.data));
    })
    .catch(err => console.log(err));
};

export const uploadImage = formData => dispatch => {
  dispatch(loadingUser());
  axios
    .post(`${API}/user/image`, formData)
    .then(() => {
      dispatch(getUserData());
    })
    .catch(err => console.log(err));
};
