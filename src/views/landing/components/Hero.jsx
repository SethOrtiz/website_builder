import React from "react";
import SignUpContainer from "../../../redux/landing/users/SignUpContainer";
import SignIn from "./SignIn";
import ForgotPassword from "./ForgotPassword";
import Info from "./Info";

const styles = {
  hero: {
    backgroundColor: "#fff",
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr 5fr 5fr 1fr",
    gridTemplateRows: "1fr 10fr 1fr"
  },
  rightColumn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#cbdadb"
  },
  getStarted: {
    padding: "0.8rem 2rem",
    fontSize: "2rem",
    backgroundColor: "#fff",
    color: "black",
    borderRadius: "2rem",
    border: "none",
    outline: "none",
    textAlign: "center"
  }
};

const Hero = props => {
  const handleGetStarted = () => {
    props.setSignUpState({ open: true });
  };

  return (
    <section id="H" style={styles.hero}>
      <div className="navRow"></div>
      <div></div>
      <Info
        background="#cbdadb"
        fontColor="#111"
        title="Let the world know who you are."
        content="Design and build your own high-quality websites. Whether you’re
          promoting a band, showcasing your work, selling merch or
          sharing your music with your fans, Hubstereo is here to help."
        linkOne={["Solo Artists","#A", "#111"]}
        linkTwo={["Bands","#B", "#111"]}
      />
      {!props.signInState.open &&
      !props.signUpState.open &&
      !props.forgotPasswordState.open ? (
        <div style={styles.rightColumn}>
          <button
            onClick={handleGetStarted}
            style={styles.getStarted}
            className="link"
          >
            Get Started
          </button>
        </div>
      ) : !props.signInState.open && !props.forgotPasswordState.open ? (
        <SignUpContainer
          setSignInState={props.setSignInState}
          signInState={props.signInState}
        />
      ) : !props.forgotPasswordState.open ? (
        <SignIn
          forgotPasswordState={props.forgotPasswordState}
          setForgotPasswordState={props.setForgotPasswordState}
          token={props.token}
        />
      ) : (
        <ForgotPassword />
      )}
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
  );
};

export default Hero;
