import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn  from "./SignIn";
import ForgotPassword  from "./ForgotPassword";
const heroStyles = {
  backgroundColor: "#fff",
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "1fr 5fr 5fr 1fr",
  gridTemplateRows: "1fr 10fr 1fr"
};

const leftColumnStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#3da4ab"
};

const rightColumnStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fe8a71"
};

const getStartedStyles = {
  padding: "0.8rem 2rem",
  fontSize: "2rem",
  backgroundColor: "#fff",
  color: "black",
  borderRadius: "2rem",
  border: "none",
  outline: "none",
  textAlign: "center"
};

export default function Hero() {
  const [signUpState, setSignUpState] = useState({
    open: false
  });

  const [signInState, setSignInState] = useState({
    open: false
  });

    const [forgotPasswordState, setForgotPasswordState] = useState({
    open: false
  });

  const handleGetStarted = () => {
    setSignUpState({ open: true });
  };

  return (
    <section id="hero" style={heroStyles}>
      <div className="navRow"></div>
      <div></div>
      <div style={leftColumnStyles}></div>
      {(!signInState.open && !signUpState.open && !forgotPasswordState.open) ? (
        <div style={rightColumnStyles}>
          <button
            onClick={handleGetStarted}
            style={getStartedStyles}
            className="link"
          >
            Get Started
          </button>
        </div>
      ) : (!signInState.open && !forgotPasswordState.open) ? (
        <SignUp setSignInState={setSignInState} signInState={signInState}/>
      ) : (!forgotPasswordState.open) ? (
        <SignIn forgotPasswordState={forgotPasswordState} setForgotPasswordState={setForgotPasswordState}/>
      ) : (<ForgotPassword/>)
      }
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
  );
}
