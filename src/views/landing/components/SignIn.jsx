import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import * as REGEX from "../../../constants/regex";

///////////////////////////////////////////     INITIAL STATE
const SignIn = props => {
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

  const [password, setPassword] = useState({
    value: "",
    valid: false,
    invalid: false
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: ""
  });

  ///////////////////////////////////////////       VALIDATION ON CHANGE
  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
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
      default:
        break;
    }
    switch (name) {
      case "email-field":
        setEmail({ ...email, value });
        break;
      case "password-field":
        setPassword({ ...password, value });
        break;
      default:
        break;
    }
    setForm({
      complete: true
    });
  };

  ///////////////////////////////////////////     RESET ALL STATES AFTER SUCCESSFUL SUBMITION
  const resetState = () => {
    setForm({
      complete: false
    });
    setEmail({
      value: "",
      valid: false,
      invalid: false
    });
    setPassword({
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

  ///////////////////////////////////////////     MAKES MAKES SURE ALL FIELDS ARE VALID BEFORE SUBMISSION
  const validateForm = () => {
    let formValid = false;
    if (email.valid && password.valid) {
      formValid = true;
    } else {
      formValid = false;
    }
    return formValid;
  };

  ///////////////////////////////////////////       CREATES A NEW USER AND REDIRECTS TO DASHBOARD
  const handleSubmit = e => {
    e.preventDefault();
    if (validateForm()) {
      const userData = {
        email: email.value,
        password: password.value
      };
      props.signIn(userData, props.history);
      resetState();
    } else {
      setForm({
        complete: false
      });
    }
  };

  ///////////////////////////////////////////     DISPLAYS ANIMATION AFTER SUMBISSION
  const { signInLoading } = props;

  ///////////////////////////////////////////     REDIRECTS TO PASSWORD RETRIEVAL
  const handleForgotPassword = () => {
    props.handleForgotPassword();
  };

  ///////////////////////////////////////////      JSX

  return (
    <>
      {signInLoading ? (
        <div className="loader-container">
          <div class="loader">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <form className="sign-in auth-form" onSubmit={handleSubmit} noValidate>
            <h1>Sign In</h1>
            <div >{formErrors.handle}</div>
            <div>
              <div className="exp-center">
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
              </div>
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
                  className="control"
                  noValidate
                  autoComplete="on"
                  valid={password.valid.toString()}
                  invalid={password.invalid.toString()}
                />
              <div >{formErrors.password}</div>
            </div>
            {!form.complete && (
              <p className="form-errors"> Form Incomplete </p>
            )}
            <div className="btn-container">
              <button type="submit">
                Sign In
              </button>
            </div>
            <div className="btn-container">
              <button
                onClick={handleForgotPassword}
                className="subtitle"
              >
                Forgot Password?
              </button>
            </div>
        </form>
      )}
    </>
  );
};

export default withRouter(SignIn);
