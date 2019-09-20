import React from "react";
import { withRouter } from "react-router-dom";
import SignUpContainer from "../../../redux/landing/users/SignUpContainer";
import SignInContainer from "../../../redux/landing/users/SignInContainer";
import ForgotPasswordContainer from "../../../redux/landing/users/ForgotPasswordContainer";
import Info from "./Info";

const Hero = props => {
  return (
    <section id="Hero" className="hero">
      <Info
        background="#111"
        fontColor="#fffef9"
        title="Let the world know who you are."
        content="Design and build your own high-quality websites. Whether you’re
          promoting a band, showcasing your work, selling merch or
          sharing your music with your fans, Hubstereo is here to help."
        linkOne={["Solo Artists", "#A", "fffef9"]}
        linkTwo={["Bands", "#B", "#fffef9"]}
      />
      {props.forgotPasswordOpen ? (
        <ForgotPasswordContainer />
      ) : props.signInOpen ? (
        <SignInContainer />
      ) : props.signUpOpen ? (
        <SignUpContainer />
      ) : (
        <div className="right-column">
          <button
            onClick={props.handleSignUp}
            className="get-started"
          >
            Get Started
          </button>
        </div>
      )}
    </section>
  );
};
export default withRouter(Hero);
