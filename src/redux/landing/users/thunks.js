import { API } from "../../../constants/api";
import { DASHBOARD } from "../../../constants/routes";
import {
  loadingSignIn,
  loadingSignUp,
  signInFailed,
  signUpFailed,
  signInSuccess,
  signUpSuccess
} from "./actions";

export function signUp(handle, email, password, passwordConfirm) {
  console.log('passwordConfirm:', passwordConfirm)
  console.log('password:', password)
  console.log('email:', email)
  console.log('handle:', handle)
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
         console.log('err', res.json())
        throw new Error();
      } else {
        console.log("Sign Up Successful")
        const token = await res.json();
        this.props.history.push(DASHBOARD);
        dispatch(signUpSuccess(token));
      }
    } catch (e) {
      dispatch(signUpFailed());
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
        console.log('err', res.json())
        throw new Error();
      } else {
        console.log("Sign In Successful")
        const token= await res.json();
        dispatch(signInSuccess(token));
      }
    } catch (e) {
      dispatch(signInFailed());
      alert(e);
    }
  };
}