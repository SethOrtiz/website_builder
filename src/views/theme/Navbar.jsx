import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const styles = {
  brand: {
    fontSize: "1.5rem",
    paddingLeft: "2rem",
    color: "fffef9"
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
    position: "fixed",
    color: "#fffef9"
  },
  signOut: {
    border: "none",
    outline: "none",
    backgroundColor: "inherit"
  },
  routes: {
    width: "100%",
    justifyContent: "space-around",
    display: "flex"
  }
};

const Navbar = props => {
  return (
    <div style={styles.navbar}>
      <div></div>
      <Link style={styles.brand} onClick={props.handleHome} to={ROUTES.LANDING}>
        <span>Hub</span>stereo
      </Link>
      <div style={styles.routes}>
        {props.auth.authenticated ? (
          <>
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
                onClick={props.signOut}
                className="exp-line-start"
                to={ROUTES.LANDING}
              >
                Sign Out
              </Link>
            </div>
          </>
        ) : (
          <>
            <div>
              <Link className="exp-line-start" to={ROUTES.LANDING}>
                {" "}
                Share{" "}
              </Link>
            </div>
            <div>
              <Link className="exp-line-start" to={ROUTES.LANDING}>
                {" "}
                Explore
              </Link>
            </div>
            <div>
              <Link
                className="exp-line-start"
                onClick={props.handleSignIn}
                to={ROUTES.LANDING}
              >
                Sign In
              </Link>
            </div>
            <div>
              <Link
                className="exp-line-start"
                onClick={props.handleSignUp}
                to={ROUTES.LANDING}
              >
                Sign Up
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Navbar;
