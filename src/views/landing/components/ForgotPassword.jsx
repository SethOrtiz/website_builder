import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const styles = {
  form: {
    width: "100%",
    backgroundColor: "#cbdadb",
    display: "grid",
    gridTemplateColumns: "1fr 6fr 1fr",
    gridTemplateRows: "1fr 10fr 1fr",
    alignItems: "center"
  },
  row: {
    display: "grid",
    gridColumn: "1 / span 3"
  },
  send: {
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
  subtitle: {
    width: "100%",
    paddingTop: "2rem",
    fontSize: "1rem",
    textAlign: "center"
  },

  btnContainer: {
    display: "flex",
    justifyContent: "center"
  }
};

const ForgotPassword = props => {
  const [validation, setValidation] = useState({
    formIncomplete: false,
    formValid: false,
    email: "",
    emailValid: false,
    emailInvalid: false,
    formErrors: {
      email: ""
    }
  });

  const validateForm = () => {
    const { emailValid } = validation;
    let formValid = false;
    if (emailValid) {
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
      formValid: false,
      email: "",
      emailValid: false,
      emailInvalid: false,
      formErrors: {
        email: ""
      }
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      const { email } = validation;
      props.recoverAccount(email);
      resetState();
    } else {
      setValidation({
        ...validation,
        fromIncomplete: true
      });
    }
  }

  return (
    <form style={styles.form} onSubmit={handleSubmit} noValidate>
      <div id="one-two-three" style={styles.row}></div>
      <div id="four"></div>
      <div id="five">
        <h1 style={styles.header}>Recover Password</h1>
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
        {validation.formIncomplete && <p> Form Incomplete </p>}
        <div style={styles.subtitle}>
          Enter the email you used to create the account.
        </div>
        <div style={styles.btnContainer}>
          <button style={styles.send} type="submit">
            Send Email
          </button>
        </div>
      </div>
      <div id="six"></div>
      <div id="seven-eight-nine" style={styles.row}></div>
    </form>
  );
};

export default withRouter(ForgotPassword);
