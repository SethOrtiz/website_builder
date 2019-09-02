import { API } from "../../../constants/api";
import {
  loadingSignIn,
  loadingSignUp,
  signInFailed,
  signUpFailed,
  signInSuccess,
  signUpSuccess
} from "./actions";

export function signUp(handle, email, password, passwordConfirm) {
  return async function(dispatch) {
    dispatch(loadingSignUp());
    try {
      const res = await fetch(`${API}/signup`, {
        method: "POST",
        body: JSON.stringify({
          handle,
          email,
          password,
          passwordConfirm
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!res.ok) {
        throw new Error();
      } else {
        alert("Sign Up Successful")
        const token = await res.json();
        dispatch(signUpSuccess(token));
      }
    } catch (e) {
      dispatch(signUpFailed());
      alert(e);
    }
  };
}

export function signIn(email, password) {
  return async function(dispatch) {
    dispatch(loadingSignIn());
    try {
      const res = await fetch(`${API}/signin`, {
        method: "POST",
        body: JSON.stringify({
          email,
          password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!res.ok) {
        throw new Error();
      } else {
        alert("Sign In Successful")
        const token= await res.json();
        dispatch(signInSuccess(token));
      }
    } catch (e) {
      dispatch(signInFailed());
      alert(e);
    }
  };
}