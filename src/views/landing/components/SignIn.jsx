import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const styles = {
  form: {
    width: "100%",
    backgroundColor: "#e3c9c9",
    display: "grid",
    gridTemplateColumns: "1fr 6fr 1fr",
    gridTemplateRows: "1fr 10fr 1fr",
    alignItems: "center"
  },
  row: {
    display: "grid",
    gridColumn: "1 / span 3"
  },
  signIn: {
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
    marginBottom: "2rem",
    fontSize: "2rem",
    textAlign: "center",
    color: "#fff"
  },
  forgotPassword: {
    width: "100%",
    padding: "1rem 0",
    fontSize: "1rem",
    textAlign: "center",
    justifySelf: "center",
    backgroundColor: "inherit",
    color: "#fff",
    border: "none",
    outline: "none",
    textShadow: "1px 1px 2px #ccc",
    fontWeight: "700"
  },

  btnContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "1rem 7rem"
  }
};

const SignIn = props => {
  const [validation, setValidation] = useState({
    formIncomplete: false,
    formValid: false,
    email: "",
    emailValid: false,
    emailInvalid: false,
    password: "",
    passwordValid: false,
    formErrors: {
      email: "",
      password: ""
    }
  });

  const validateForm = () => {
    const { emailValid, passwordValid } = validation;
    let formValid = false;
    if (emailValid && passwordValid) {
      formValid = true;
    } else {
      setValidation({ ...validation, formIncomplete: true });
    }
    return formValid;
  };

  const isEmail = email => {
    const regEx = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(regEx)) return true;
    else return false;
  };
  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = validation.formErrors;
    console.log(validation);
    switch (name) {
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
        formErrors.password = value.length === 0 ? "field required" : "";
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
      passwordInvalid: false,
      formValid: false,
      email: "",
      emailValid: false,
      emailInvalid: false,
      password: "",
      passwordValid: false,
      formErrors: {
        email: "",
        password: ""
      }
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      const { email, password } = validation;
      props.signIn(email, password);
      resetState();
    } else {
      setValidation({
        ...validation,
        fromIncomplete: true
      });
    }
  }

  ////// Already have an acount ////
  const handleForgotPassword = () => {
    props.setForgotPasswordState({ open: true });
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit} noValidate>
      <div id="one-two-three" style={styles.row}></div>
      <div id="four"></div>
      <div id="five">
        <h1 style={styles.header}>Sign In</h1>
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
              valid={validation.emailValid}
              invalid={validation.emailInvalid}
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
              className="control"
              noValidate
              valid={validation.passwordValid}
              invalid={validation.passwordInvalid}
            />
          </div>
          <div className="feedback">{validation.formErrors.password}</div>
        </div>
        {validation.formIncomplete && <p> Form Incomplete </p>}
        <div style={styles.btnContainer}>
          <button style={styles.signIn} type="submit">
            Sign In
          </button>
        </div>
        <div style={styles.btnContainer}>
        <button onClick={handleForgotPassword} style={styles.forgotPassword}>
          Forgot Password?
        </button>
        </div>
      </div>
      <div id="six"></div>
      <div id="seven-eight-nine" style={styles.row}></div>
    </form>
  );
};

export default withRouter(SignIn);
