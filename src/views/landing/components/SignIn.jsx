import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { DASHBOARD } from "../../../constants/routes";
import * as REGEX from "../../../constants/regex";

/* COLOR SCHEME */
/* blue: #d2e7ff  | babyblue: #e3f0ff  | white : #fffef9  | peach: #ffefd7  | lightpeach: #fff6e9 | salmon: "#e3c9c9"*/

const styles = {
  form: {
    width: "100%",
    backgroundColor: "#d2e7ff",
    display: "grid",
    gridTemplateColumns: "1fr 6fr 1fr",
    gridTemplateRows: "1fr 10fr 1fr",
    alignItems: "center"
  },
  signIn: {
    borderRadius: "2rem",
    padding: "0.8rem 2rem",
    fontSize: "1rem",
    backgroundColor: "inherit",
    border: "1px solid #000",
    outline: "none",
    textAlign: "center",
    marginTop: "2rem",
    fontWeight: "600"
  },
  header: {
    width: "100%",
    marginBottom: "2rem",
    fontSize: "2rem",
    textAlign: "center"
  },
  forgotPassword: {
    width: "100%",
    padding: "1rem 0",
    fontSize: "1rem",
    textAlign: "center",
    justifySelf: "center",
    backgroundColor: "inherit",
    border: "none",
    outline: "none",
    fontWeight: "700"
  },
  formErrors: {
    fontSize: "1.2rem",
    paddingTop: "1rem",
    textAlign: "center",
    color: "#777",
    fontWeight: "600"
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "1rem 7rem"
  }
};

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

  ///////////////////////////////////////////       CREATES A NEW USER AND REDIRECTS TO DASHBO

  const handleSubmit = e => {
    e.preventDefault();
    if (validateForm()) {
      props.signIn(email.value, password.value);
      resetState();
      props.history.push(DASHBOARD);
    } else {
      setForm({
        complete: false
      });
    }
  };

  ///////////////////////////////////////////     REDIRECTS TO Password Retreval

  const handleForgotPassword = () => {
    props.handleForgotPassword();
  };

  ///////////////////////////////////////////      JSX

  return (
    <form style={styles.form} onSubmit={handleSubmit} noValidate>
      <div id="one-two-three" className="row"></div>
      <div id="four"></div>
      <div id="five">
        <h1 style={styles.header}>Sign In</h1>
        <div className="feedback">{formErrors.handle}</div>

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
          <div className="feedback">{formErrors.email}</div>
        </div>
        <div>
          <div className="exp-center">
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
          </div>
          <div className="feedback">{formErrors.password}</div>
        </div>
        {!form.complete && <p style={styles.formErrors}> Form Incomplete </p>}
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
      <div id="seven-eight-nine" className="row"></div>
    </form>
  );
};

export default withRouter(SignIn);
