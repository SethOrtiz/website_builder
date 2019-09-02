import React, { useState } from "react";
import Profile from "./components/Profile";
import Notepad from "./components/Notepad";
import MyWebsites from "./components/MyWebsites";
import Navbar from "../theme/Navbar";
import Footer from "../theme/Footer";

export default function Dashboard() {
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
      <Navbar
        setSignInState={setSignInState}
        signInState={signInState}
        forgotPasswordState={forgotPasswordState}
        setForgotPasswordState={setForgotPasswordState}
        setSignUpState={setSignUpState}
        signUpState={signUpState}
      />
      <Profile />
      <Notepad />
      <MyWebsites />
      <Footer />
    </>
  );
}
