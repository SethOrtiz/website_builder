import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const styles = {
  form: {
    width: "100%",
    backgroundColor: "#eedbdb",
    display: "grid",
    gridTemplateColumns: "1fr 6fr 1fr",
    gridTemplateRows: "1fr 10fr 1fr",
    alignItems: "center"
  },
  signUp: {
    borderRadius: "2rem",
    padding: "0.8rem 2rem",
    fontSize: "1rem",
    backgroundColor: "none",
    border: "none",
    outline: "none",
    textAlign: "center",
    marginTop: "2rem"
  },
  header: {
    width: "100%",
    marginBottom: "1rem",
    fontSize: "2rem",
    textAlign: "center",
    color: "#fff"
  },
  subtitle: {
    width: "100%",
    padding: "1rem 0",
    fontSize: "1rem",
    textAlign: "center"
  },
  signIn: {
    backgroundColor: "inherit",
    border: "none",
    outline: "none",
    padding: "1rem 0.5rem",
    fontSize: "1rem",
    color: "#fff",
    fontWeight: "700",
    textShadow: "1px 1px 2px #ccc"
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center"
  },
  formIncomplete:{
    fontSize: "1rem",
    paddingTop: "1rem",
    textAlign: "center",
    color: "#B73239",
    fontWeight: "600"
  }
};

const SignUp = props => {
  const [validation, setValidation] = useState({
    formIncomplete: false,
    formValid: false,
    handle: "",
    handleValid: false,
    handleInvalid: false,
    email: "",
    emailValid: false,
    emailInvalid: false,
    password: "",
    passwordValid: false,
    passwordInvalid: false,
    passwordConfirm: "",
    passwordConfirmValid: false,
    passwordConfirmInvalid: false,
    formErrors: {
      handle: "",
      email: "",
      password: "",
      passwordConfirm: ""
    }
  });

  const isEmail = email => {
    const regEx = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(regEx)) return true;
    else return false;
  };
  const containsLowerCase = password => {
    const regEx = "^(?=.*[a-z])";
    if (password.match(regEx)) return true;
    else return false;
  };
  const containsUpperCase = password => {
    const regEx = "^(?=.*[A-Z])";
    if (password.match(regEx)) return true;
    else return false;
  };

  const containsSpecial = password => {
    const regEx = "^(?=.*[@#$%])";
    if (password.match(regEx)) return true;
    else return false;
  };

  const containsNumber = password => {
    const regEx = "^(?=.*[0-9])";
    if (password.match(regEx)) return true;
    else return false;
  };

  const containsEight = password => {
    const regEx = "^(?=.{8,})";
    if (password.match(regEx)) return true;
    else return false;
  };

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = validation.formErrors;
    switch (name) {
      case "handle":
        formErrors.handle = value.length === 0 ? "field required" : "";
        value.length === 0
          ? setValidation({
              ...validation,
              handleInvalid: true,
              handlelValid: false
            })
          : setValidation({
              ...validation,
              handleValid: true,
              handleInvalid: false
            });
        break;
      case "email":
        formErrors.email = value.length === 0 ? "field required" : "";
        formErrors.email = isEmail(value) ? "" : "must be a valid email";
        value.length === 0
          ? setValidation({
              ...validation,
              emailInvalid: true,
              emailValid: false
            })
          : setValidation({
              ...validation,
              emailValid: true,
              emailInvalid: false
            });
        break;
      case "password":
        switch (true) {
          case !containsLowerCase(value):
            formErrors.password =
              "password must contain at least 1 lowercase alphabetical character";
            break;
          case !containsUpperCase(value):
            formErrors.password =
              "password must contain at least 1 uppercase alphabetical character";
            break;
          case !containsNumber(value):
            formErrors.password =
              "password must contain at least 1 numeric character";
            break;
          case !containsSpecial(value):
            formErrors.password =
              'password must contain atleast one of the symbols in this list "@#$%"';
            break;
          case !containsEight(value):
            formErrors.password = "password must be eight characters or longer";
            break;
          default:
            formErrors.password = "";
            break;
        }
        value.length === 0
          ? setValidation({
              ...validation,
              passwordInvalid: true,
              passwordValid: false
            })
          : setValidation({
              ...validation,
              passwordValid: true,
              passwordInvalid: false
            });
        break;
      case "passwordConfirm":
        formErrors.passwordConfirm =
          value !== validation.password ? "passwords must match" : "";
        value.length === 0
          ? setValidation({
              ...validation,
              passwordConfirmInvalid: true,
              passwordConfirmValid: false
            })
          : setValidation({
              ...validation,
              passwordConfirmValid: true,
              passwordConfirmInvalid: false
            });
        break;
      default:
        break;
    }
    setValidation({
      ...validation,
      formErrors,
      [name]: value,
      formIncomplete: false
    });
  };

  const resetState = () => {
    setValidation({
      formIncomplete: false,
      handle: "",
      handleValid: false,
      handleInvalid: false,
      email: "",
      emailValid: false,
      emailInvalid: false,
      password: "",
      passwordValid: false,
      passwordInvalid: false,
      passwordConfirm: "",
      formValid: false,
      passwordConfirmValid: false,
      passwordConfirmInvalid: false,
      formErrors: {
        handle: "",
        email: "",
        password: "",
        passwordConfirm: ""
      }
    });
  };

  const validateForm = () => {
    const {
      handleValid,
      emailValid,
      passwordValid,
      passwordConfirmValid
    } = validation;
    let formValid = false;
    if (emailValid && passwordValid && passwordConfirmValid && handleValid) {
      formValid = true;
    } else {
      formValid = false;
    }
    return formValid;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validateForm()) {
      const { handle, email, password, passwordConfirm } = validation;
      props.signUp(handle, email, password, passwordConfirm);
      resetState();
    } else {
      setValidation({
        ...validation,
        fromIncomplete: true
      });
    }
  }
////// Already have an acount ////
const handleSignIn = () => {
   props.setSignInState({open: true})
 }

  return (
    <form style={styles.form} onSubmit={handleSubmit} noValidate>
      <div id="one-two-three" className="row">
      </div>
      <div id="four"></div>
      <div id="five">
        <h1 style={styles.header}>Sign Up</h1>
        <div style={styles.subtitle}>
          Already have an account?<button onClick={handleSignIn}  style={styles.signIn}>Sign In</button>
        </div>
        <div>
        <div className="exp-line-center">
          <input
            type="text"
            name="handle"
            onChange={handleChange}
            placeholder="UserName"
            value={validation.handle}
            id="handle-field"
            className="control"
            noValidate
            valid={(validation.handleValid).toString()}
            invalid={(validation.handleInvalid).toString()}
          />
          </div>
          <div className="feedback">{validation.formErrors.handle}</div>
        </div>
        <div>
        <div className="exp-line-center">
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email"
            value={validation.email}
            id="email-field"
            className="control"
            noValidate
            valid={(validation.emailValid).toString()}
            invalid={(validation.emailInvalid).toString()}
          />
          </div>
          <div className="feedback">{validation.formErrors.email}</div>
        </div>
        <div>
        <div className="exp-line-center">
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
            value={validation.password}
            id="body-field"
            className="control "
            noValidate
            autoComplete="on"
            valid={(validation.passwordValid).toString()}
            invalid={(validation.passwordInvalid).toString()}
          />
          </div>
          <div className="feedback">{validation.formErrors.password}</div>
        </div>
        <div>
        <div className="exp-line-center">
          <input
            type="password"
            name="passwordConfirm"
            onChange={handleChange}
            value={validation.passwordConfirm}
            id="password-confirm-field"
            className="control"
            noValidate
            autoComplete="on"
            valid={(validation.passwordConfirmValid).toString()}
            invalid={(validation.passwordConfirmInvalid).toString()}
            placeholder="Confirm Password"
          />
          </div>
          <div className="feedback">
            {validation.formErrors.passwordConfirm}
          </div>
        </div>
       {validation.formIncomplete && <p style={styles.formErrors}> Form Incomplete </p>}
        <div style={styles.btnContainer}>
          <button style={styles.signUp} type="submit">
            Sign Up
          </button>
        </div>
      </div>
      <div id="six"></div>
      <div id="seven-eight-nine" className="row">
      </div>
    </form>
  );
};

export default withRouter(SignUp);
