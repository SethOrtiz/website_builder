import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const styles = {
  brand: {
    fontSize: "1.5rem",
    paddingLeft: "2rem",
    textShadow: "1px 1px 2rem #eee",
    color: "black"
  },
  navbar: {
    width: "100vw",
    justifyContent: "start",
    alignItems: "center",
    display: "grid",
    gridTemplateColumns: "1fr 5fr 5fr 1fr",
    padding: "1.6rem 0rem",
    fontSize: "1rem",
    textTransform: "uppercase",
    fontWeight: "600",
    position: "fixed"
  },
  routes: {
    width: "100%",
    justifyContent: "space-around",
    display: "flex"
  }
};

const Navbar = props => {
  ////// Redirect to Landing page with signIn engaged ////
  const handleHome = () => {
    props.setSignInState({ open: false });
    props.setSignUpState({ open: false });
    props.setForgotPasswordState({ open: false });
  };

  const handleSignIn = () => {
    props.setSignInState({ open: true });
    props.setSignUpState({ open: false });
    props.setForgotPasswordState({ open: false });
  };
  const handleSignUp = () => {
    props.setSignInState({ open: false });
    props.setSignUpState({ open: true });
    props.setForgotPasswordState({ open: false });
  };

  return (
    <div style={styles.navbar}>
      <div></div>
      <Link style={styles.brand} onClick={handleHome} to={ROUTES.LANDING}>
        <span>Hub</span>stereo
      </Link>
      <div style={styles.routes}>
        <div>
          <Link className="exp-line-start" to={ROUTES.DASHBOARD}>
            Dashboard
          </Link>
        </div>
        <div>
          <Link className="exp-line-start" to={ROUTES.WORKSTATION}>
            Workstation
          </Link>
        </div>
        <div>
          <Link
            className="exp-line-start"
            onClick={handleSignIn}
            to={ROUTES.LANDING}
          >
            Sign In
          </Link>
        </div>
        <div>
          <Link
            className="exp-line-start"
            onClick={handleSignUp}
            to={ROUTES.LANDING}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
