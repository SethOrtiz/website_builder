import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";

const styles = {
  brand: {
    fontSize: "1.5em",
    paddingLeft: "2em",
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
    position: "fixed"
  },
  authedNavbar: {
    height: "8vh",
    justifyContent: "start",
    alignItems: "center",
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    textAlign: "center",
    fontSize: "1rem",
    textTransform: "uppercase",
    fontWeight: "600",
    backgroundColor: "#fffef9",
    borderTop: "2px solid #000",
    borderRight: "2px solid #000",
    borderLeft: "2px solid #000",
    boxSizing: "border-box"
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
  },
  authedRoutes: {
    width: "100%",
    justifyContent: "flex-end",
    display: "flex"
  },
  navItem: {
    marginRight: "1em",
  },
  link: {
    color: "#000"
  }
};

const Navbar = props => {
  const { authenticated } = props;

  return (
    <>
      {authenticated ? (
        <>
          <div style={styles.authedNavbar}>
            <div></div>
            <div style={styles.authedRoutes}>
              <div style={styles.navItem}>
                <Link className="exp-line-start" style={styles.link}to={ROUTES.DASHBOARD}>
                  Dashboard
                </Link>
              </div>
              <div style={styles.navItem}>
                <Link className="exp-line-start" to={ROUTES.WORKSTATION}>
                  Workstation
                </Link>
              </div>
              <div style={styles.navItem}>
                <Link
                  onClick={props.signOut}
                  className="exp-line-start"
                  to={ROUTES.LANDING}
                >
                  Sign Out
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div style={styles.navbar}>
          <div></div>
          <Link
            style={styles.brand}
            onClick={props.handleHome}
            to={ROUTES.LANDING}
          >
            <span>Hub</span>stereo
          </Link>
          <div style={styles.routes}>
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
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
