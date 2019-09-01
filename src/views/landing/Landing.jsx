import React, { useState } from "react";
import Hero from "./components/Hero";
import ShowcaseA from "./components/ShowcaseA";
import ShowcaseB from "./components/ShowcaseB";
import Navbar from "../theme/Navbar";
import Footer from "../theme/Footer";

export default function Landing() {
  const [signInState, setSignInState] = useState({
    open: false
  });
  const [signUpState, setSignUpState] = useState({
    open: false
  });

  const [forgotPasswordState, setForgotPasswordState] = useState({
    open: false
  });

  return (
    <>
      <Navbar setSignInState={setSignInState} signInState={signInState} forgotPasswordState={forgotPasswordState} setForgotPasswordState={setForgotPasswordState} setSignUpState={setSignUpState} signUpState={signUpState}/>
      <Hero id="H"setSignInState={setSignInState} signInState={signInState} forgotPasswordState={forgotPasswordState} setForgotPasswordState={setForgotPasswordState} setSignUpState={setSignUpState} signUpState={signUpState}/>
      <ShowcaseA />
      <ShowcaseB />
      <Footer />
    </>
  );
}
