import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import * as REGEX from "../../../constants/regex";

/////////////////////////////////////////////////////        INITIAL STATE
const SignUp = props => {
  useEffect(() => {
    setForm({ complete: true });
  }, []);

  const [form, setForm] = useState({
    complete: false
  });
  const [email, setEmail] = useState({
    value: "",
    valid: false,
    invalid: false
  });
  const [handle, setHandle] = useState({
    value: "",
    valid: false,
    invalid: false
  });
  const [password, setPassword] = useState({
    value: "",
    valid: false,
    invalid: false
  });
  const [passwordConfirm, setPasswordConfirm] = useState({
    value: "",
    valid: false,
    invalid: false
  });
  const [formErrors, setFormErrors] = useState({
    handle: "",
    email: "",
    password: "",
    passwordConfirm: ""
  });

  //////////////////////////////////////////////////     VALIDATION ON CHANGE

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "handle-field":
        value.length === 0
          ? setFormErrors({ ...formErrors, handle: "field required" })
          : setFormErrors({ ...formErrors, handle: "" });
        if (value.length === 0) {
          handle.valid = false;
          handle.invalid = true;
        } else {
          handle.valid = true;
          handle.invalid = false;
        }
        break;
      case "email-field":
        value.length === 0
          ? setFormErrors({ ...formErrors, email: "field required" })
          : setFormErrors({ ...formErrors, email: "" });
        REGEX.isEmail(value)
          ? setFormErrors({ ...formErrors, email: "" })
          : setFormErrors({ ...formErrors, email: "must be a valid email" });
        if (REGEX.isEmail(value)) {
          email.valid = true;
          email.invalid = false;
        } else {
          email.valid = false;
          email.invalid = true;
        }
        break;
      case "password-field":
        switch (true) {
          case !REGEX.containsLowerCase(value):
            setFormErrors({
              ...formErrors,
              password:
                "password must contain at least 1 lowercase alphabetical character"
            });
            break;
          case !REGEX.containsUpperCase(value):
            setFormErrors({
              ...formErrors,
              password:
                "password must contain at least 1 uppercase alphabetical character"
            });
            break;
          case !REGEX.containsNumber(value):
            setFormErrors({
              ...formErrors,
              password: "password must contain at least 1 numeric character"
            });
            break;
          case !REGEX.containsSpecial(value):
            setFormErrors({
              ...formErrors,
              password:
                'password must contain atleast one of the symbols in this list "@#$%"'
            });
            break;
          case !REGEX.containsEight(value):
            setFormErrors({
              ...formErrors,
              password: "password must be eight characters or longer"
            });
            break;
          default:
            setFormErrors({ ...formErrors, password: "" });
            break;
        }
        switch (true) {
          case !REGEX.containsLowerCase(value):
            password.valid = false;
            password.invalid = true;
            break;
          case !REGEX.containsUpperCase(value):
            password.valid = false;
            password.invalid = true;
            break;
          case !REGEX.containsNumber(value):
            password.valid = false;
            password.invalid = true;
            break;
          case !REGEX.containsSpecial(value):
            password.valid = false;
            password.invalid = true;
            break;
          case !REGEX.containsEight(value):
            password.valid = false;
            password.invalid = true;
            break;
          default:
            password.valid = true;
            password.invalid = false;
            break;
        }
        break;
      case "password-confirm-field":
        value !== password.value
          ? setFormErrors({
              ...formErrors,
              passwordConfirm: "passwords must match"
            })
          : setFormErrors({ ...formErrors, passwordConfirm: "" });

        if (value !== password.value) {
          passwordConfirm.valid = false;
          passwordConfirm.invalid = true;
        } else {
          passwordConfirm.valid = true;
          passwordConfirm.invalid = false;
        }
        break;
      default:
        break;
    }
    switch (name) {
      case "handle-field":
        setHandle({ ...handle, value });
        break;
      case "email-field":
        setEmail({ ...email, value });
        break;
      case "password-field":
        setPassword({ ...password, value });
        break;
      case "password-confirm-field":
        setPasswordConfirm({ ...passwordConfirm, value });
        break;
      default:
        break;
    }
    setForm({
      complete: true
    });
  };

  ////////////////////////////////////////////     RESET ALL STATES AFTER SUCCESSFUL SUBMITION

  const resetState = () => {
    setForm({
      complete: false
    });
    setEmail({
      value: "",
      valid: false,
      invalid: false
    });
    setHandle({
      value: "",
      valid: false,
      invalid: false
    });
    setPassword({
      value: "",
      valid: false,
      invalid: false
    });
    setPasswordConfirm({
      value: "",
      valid: false,
      invalid: false
    });
    setFormErrors({
      value: "",
      email: "",
      password: "",
      passwordConfirm: ""
    });
  };

  /////////////////////////////////////////     MAKES MAKES SURE ALL FIELDS ARE VALID BEFORE SUBMISSION
  const validateForm = () => {
    let formValid = false;
    if (
      email.valid &&
      password.valid &&
      passwordConfirm.valid &&
      handle.valid
    ) {
      formValid = true;
    } else {
      formValid = false;
    }
    return formValid;
  };

  ////////////////////////////////////////     CREATES A NEW USER AND REDIRECTS TO DASHBOARD

  const handleSubmit = e => {
    e.preventDefault();
    if (validateForm()) {
      const newUserData = {
        email: email.value,
        password: password.value,
        passwordConfirm: passwordConfirm.value,
        handle: handle.value
      };
      props.signUp(newUserData, props.history);
      resetState();
    } else {
      setForm({
        complete: false
      });
    }
  };

  ///////////////////////////////////////////     DISPLAYS ANIMATION AFTER SUMBISSION
  const { signUpLoading } = props;


  return (
    <>
      {signUpLoading ? (
        <div className="loaderContainer">
          <div class="loader">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <h1>Sign Up</h1>
            <div>
              Already have an account?
              <button onClick={props.handleSignIn} className="subtitle">
                Sign In
              </button>
            </div>
            <div>
                <input
                  type="text"
                  name="handle-field"
                  onChange={handleChange}
                  placeholder="UserName"
                  value={handle.value}
                  id="handle-field"
                  className="control"
                  noValidate
                  valid={handle.valid.toString()}
                  invalid={handle.invalid.toString()}
                />
              <div>{formErrors.handle}</div>
            </div>
            <div>
                <input
                  type="email"
                  name="email-field"
                  onChange={handleChange}
                  placeholder="Email"
                  value={email.value}
                  id="email-field"
                  className="control"
                  noValidate
                  valid={email.valid.toString()}
                  invalid={email.invalid.toString()}
                />
              <div >{formErrors.email}</div>
            </div>
            <div>
                <input
                  type="password"
                  name="password-field"
                  onChange={handleChange}
                  placeholder="Password"
                  value={password.value}
                  id="current-password"
                  className="control "
                  noValidate
                  autoComplete="on"
                  valid={password.valid.toString()}
                  invalid={password.invalid.toString()}
                />
              <div>{formErrors.password}</div>
            </div>
            <div>
                <input
                  type="password"
                  name="password-confirm-field"
                  onChange={handleChange}
                  value={passwordConfirm.value}
                  id="password-confirm-field"
                  className="control"
                  noValidate
                  autoComplete="on"
                  valid={passwordConfirm.valid.toString()}
                  invalid={passwordConfirm.invalid.toString()}
                  placeholder="Confirm Password"
                />
              <div>{formErrors.passwordConfirm}</div>
            </div>
            {!form.complete && (
              <p className="form-errors"> Form Incomplete </p>
            )}
            <div className="btn-container">
              <button type="submit">
                Sign Up
              </button>
            </div>
        </form>
      )}
    </>
  );
};

export default withRouter(SignUp);
