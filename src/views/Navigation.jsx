import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";

const Navigation = props => {
  const { authenticated } = props;

  return (
    <>
      {authenticated ? (
        <header className="navigation">
          <Link className="logo" onClick={props.handleHome} to={ROUTES.LANDING}>
            Hubstereo
          </Link>
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <nav>
            <ul>
              <li>
                <Link className="link" to={ROUTES.DASHBOARD}>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link className="link" to={ROUTES.WORKSTATION}>
                  Workstation
                </Link>
              </li>
              <li>
                <Link
                  onClick={props.signOut}
                  className="link"
                  to={ROUTES.LANDING}
                >
                  Sign Out
                </Link>
              </li>
            </ul>
          </nav>
          <label htmlFor="nav-toggle" className="nav-toggle-label">
            <span></span>
          </label>
        </header>
      ) : (
        <header className="navigation">
          <Link className="logo" onClick={props.handleHome} to={ROUTES.LANDING}>
            <h1>Hubstereo</h1>
          </Link>
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <nav>
            <ul>
              <li>
                <Link className="link" to={ROUTES.LANDING}>
                  Share
                </Link>
              </li>
              <li>
                <Link className="link" to={ROUTES.LANDING}>
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  className="link"
                  onClick={props.handleSignIn}
                  to={ROUTES.LANDING}
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  className="link"
                  onClick={props.handleSignUp}
                  to={ROUTES.LANDING}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>
          <label htmlFor="nav-toggle" className="nav-toggle-label">
            <span></span>
          </label>
        </header>
      )}
    </>
  );
};

export default Navigation;
