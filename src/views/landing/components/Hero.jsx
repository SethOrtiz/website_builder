import React from "react";
import { withRouter } from "react-router-dom";
import SignUpContainer from "../../../redux/landing/users/SignUpContainer";
import SignInContainer from "../../../redux/landing/users/SignInContainer";
import ForgotPassword from "./ForgotPassword";
import Info from "./Info";

const styles = {
  hero: {
    backgroundColor: "#fffef9",
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr 5fr 5fr 1fr",
    gridTemplateRows: "1fr 10fr 1fr"
  },
  rightColumn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333"
  },
  getStarted: {
    padding: "0.8rem 2rem",
    fontSize: "2rem",
    backgroundColor: "#fffef9",
    color: "black",
    borderRadius: "2rem",
    border: "none",
    outline: "none",
    textAlign: "center"
  }
};

const Hero = props => {
  return (
    <section id="H" style={styles.hero}>
      <div className="navRow"></div>
      <div></div>
      <Info
        background="#333"
        fontColor="#fffef9"
        title="Let the world know who you are."
        content="Design and build your own high-quality websites. Whether you’re
          promoting a band, showcasing your work, selling merch or
          sharing your music with your fans, Hubstereo is here to help."
        linkOne={["Solo Artists", "#A", "#fffef9"]}
        linkTwo={["Bands", "#B", "#fffef9"]}
      />
      {props.forgotPasswordOpen ? (
        <ForgotPassword />
      ) : props.signInOpen ? (
        <SignInContainer/>
      ) : props.signUpOpen ? (
        <SignUpContainer/>
      ) : (
        <div style={styles.rightColumn}>
          <button
            onClick={props.handleSignUp}
            style={styles.getStarted}
            className="link"
          >
            Get Started
          </button>
        </div>
      )}
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
  );
};
export default withRouter(Hero);
