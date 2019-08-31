import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const brandStyles = {
  fontSize: "1.5rem",
  color: "#fff",
  paddingLeft: "2rem",
};

const navbarStyles = {
  width: "100vw",
  justifyContent: "start",
  alignItems: "center",
  display: "grid",
  gridTemplateColumns: "1fr 5fr 5fr 1fr",
  padding: "2rem 0rem",
  fontSize: "1rem",
  textTransform: "uppercase",
  fontWeight: "600",
  color: "#fff",
  position: "fixed",
  // backgroundColor: "rgba(255, 255, 255, 0.08)"
};

const routesStyles = {
  width: "100%",
  justifyContent: "space-around",
  display: "flex"
};

const Navbar = () => (
  <div style={navbarStyles}>
  <div></div>
    <div style={brandStyles}>Hubstereo</div>
    <div style={routesStyles}>
      <Link to={ROUTES.DASHBOARD}>
        Dashboard
      </Link>
      <Link  to={ROUTES.WORKSTATION}>
        Workstation
      </Link>
      <Link  to={ROUTES.SIGN_IN}>
        Log In
      </Link>
    </div>
    <div></div>
  </div>
);
export default Navbar;
