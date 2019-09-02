import React, { useState } from "react";
import { withRouter } from "react-router-dom";

/////////////////// STYLES ///////////////////////////

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
  formIncomplete: {
    fontSize: "1rem",
    paddingTop: "1rem",
    textAlign: "center",
    color: "#B73239",
    fontWeight: "600"
  }
};
/////////////// INITIAL STATE /////////////////////////////
const SignUp = props => {
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
  /////////////// REGEX ///////////////////////////////////////////
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

  ////////////////////////////////      VALIDATION ON CHANGE      ///////////////////////////////////////

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "handle-field":
        value.length === 0
          ? setFormErrors({ ...formErrors, handle: "field required" })
          : setFormErrors({ ...formErrors, handle: "" });
        if (value.length === 0) {
          // setHandle({
          //   ...handle,
          //   invalid: true,
          //   valid: false
          // });
          handle.valid = false;
          handle.invalid = true;
        } else {
          // setHandle({
          //   ...handle,
          //   valid: true,
          //   invalid: false
          // });
          handle.valid = true;
          handle.invalid = false;
        }
        break;
      case "email-field":
        value.length === 0
          ? setFormErrors({ ...formErrors, email: "field required" })
          : setFormErrors({ ...formErrors, email: "" });
        isEmail(value)
          ? setFormErrors({ ...formErrors, email: "" })
          : setFormErrors({ ...formErrors, email: "must be a valid email" });
        if (isEmail(value)) {
          email.valid = true;
          email.invalid = false;
        } else {
          email.valid = false;
          email.invalid = true;
        }
        break;
      case "password-field":
        switch (true) {
          case !containsLowerCase(value):
            setFormErrors({
              ...formErrors,
              password:
                "password must contain at least 1 lowercase alphabetical character"
            });
            break;
          case !containsUpperCase(value):
            setFormErrors({
              ...formErrors,
              password:
                "password must contain at least 1 uppercase alphabetical character"
            });
            break;
          case !containsNumber(value):
            setFormErrors({
              ...formErrors,
              password: "password must contain at least 1 numeric character"
            });
            break;
          case !containsSpecial(value):
            setFormErrors({
              ...formErrors,
              password:
                'password must contain atleast one of the symbols in this list "@#$%"'
            });
            break;
          case !containsEight(value):
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
          case !containsLowerCase(value):
            // setPassword({
            //   ...password,
            //   invalid: true,
            //   valid: false
            // });
            password.valid = false;
            password.invalid = true;
            break;
          case !containsUpperCase(value):
            // setPassword({
            //   ...password,
            //   invalid: true,
            //   valid: false
            // });
            password.valid = false;
            password.invalid = true;
            break;
          case !containsNumber(value):
            // setPassword({
            //   ...password,
            //   invalid: true,
            //   valid: false
            // });
            password.valid = false;
            password.invalid = true;
            break;
          case !containsSpecial(value):
            // setPassword({
            //   ...password,
            //   invalid: true,
            //   valid: false
            // });
            password.valid = false;
            password.invalid = true;
            break;
          case !containsEight(value):
            // setPassword({
            //   ...password,
            //   invalid: true,
            //   valid: false
            // });
            password.valid = false;
            password.invalid = true;
            break;
          default:
            // setPassword({
            //   ...password,
            //   invalid: false,
            //   valid: true
            // });
            password.valid = true;
            password.invalid = false;
            console.log(password);
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
          //setPasswordConfirm({
          //     ...passwordConfirm,
          //     invalid: true,
          //     valid: false
          //   })
          passwordConfirm.valid = false;
          passwordConfirm.invalid = true;
        } else {
          //   setPasswordConfirm({
          //     ...passwordConfirm,
          //     invalid: false,
          //     valid: true
          //   });
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

  /////////////////////// RESET ALL STATES AFTER SUCCESSFUL SUBMITION ////////////////////////

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

  ////////////////////// MAKES MAKES SURE ALL FIELDS ARE VALID BEFORE SUBMISSION //////////////////////

  const validateForm = () => {
    // to check if valid values are being updated correctly

    alert(handle.valid);
    alert(password.valid);
    alert(passwordConfirm.valid);
    alert(handle.valid);

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

  ////////////////////////// CREATES A NEW USER AND REDIRECTS TO DASHBOARD //////////////////////////////////////

  const handleSubmit = e => {
    e.preventDefault();
    if (validateForm()) {
      props.signUp(
        handle.value,
        email.value,
        password.value,
        passwordConfirm.value
      );
      alert("You're the man");
      resetState();
    } else {
      setForm({
        complete: false
      });
      alert("validatForm() returned false");
    }
  };
  /////////////////////// REDIRECTS TO SIGN IN ////////////////////////////////////

  const handleSignIn = () => {
    props.setSignInState({ open: true });
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit} noValidate>
      <div id="one-two-three" className="row"></div>
      <div id="four"></div>
      <div id="five">
        <h1 style={styles.header}>Sign Up</h1>
        <div style={styles.subtitle}>
          Already have an account?
          <button onClick={handleSignIn} style={styles.signIn}>
            Sign In
          </button>
        </div>
        <div>
          <div className="exp-line-center">
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
          </div>
          <div className="feedback">{formErrors.handle}</div>
        </div>
        <div>
          <div className="exp-line-center">
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
          <div className="exp-line-center">
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
        <div>
          <div className="exp-line-center">
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
          </div>
          <div className="feedback">{formErrors.passwordConfirm}</div>
        </div>
        {!form.complete && <p style={styles.formErrors}> Form Incomplete </p>}
        <div style={styles.btnContainer}>
          <button style={styles.signUp} type="submit">
            Sign Up
          </button>
        </div>
      </div>
      <div id="six"></div>
      <div id="seven-eight-nine" className="row"></div>
    </form>
  );
};

export default withRouter(SignUp);
