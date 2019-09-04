import React from "react";
import { withRouter } from "react-router-dom";
import SignUpContainer from "../../../redux/landing/users/SignUpContainer";
import SignInContainer from "../../../redux/landing/users/SignInContainer";
import ForgotPassword from "./ForgotPassword";
import Info from "./Info";
/* COLOR SCHEME */
/* blue: #d2e7ff  | babyblue: #e3f0ff  | white : #fffef9  | peach: #ffefd7  | lightpeach: #fff6e9 | salmon: "#e3c9c9"*/
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
    backgroundColor: "#ffefd7"
  },
  getStarted: {
    padding: "0.8rem 2rem",
    fontSize: "4rem",
    backgroundColor: "inherit",
    color: "black",
    borderRadius: "2rem",
    border: "none",
    outline: "none",
    textAlign: "center",
    fontWeight: "600",
    fontStyle: "italic"
  }
};

const Hero = props => {
  return (
    <section id="H" style={styles.hero}>
      <div className="navRow"></div>
      <div></div>
      <Info
        background="#ffefd7"
        fontColor="#000"
        title="Let the world know who you are."
        content="Design and build your own high-quality websites. Whether you’re
          promoting a band, showcasing your work, selling merch or
          sharing your music with your fans, Hubstereo is here to help."
        linkOne={["Solo Artists", "#A", "#000"]}
        linkTwo={["Bands", "#B", "#000"]}
      />
      {props.forgotPasswordOpen ? (
        <ForgotPassword />
      ) : props.signInOpen ? (
        <SignInContainer />
      ) : props.signUpOpen ? (
        <SignUpContainer />
      ) : (
        <div style={styles.rightColumn}>
          <button
            className="exp-center-black"
            onClick={props.handleSignUp}
            style={styles.getStarted}
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
