import React from "react";

const styles = {
  brand: {
    fontSize: "1.5rem",
    paddingLeft: "2rem",
    color: "fffef9"
  },
  navbar: {
    width: "69.7vw",
    justifyContent: "flex-start",
    alignItems: "center",
    display: "grid",
    gridTemplateColumns: "1fr 5fr 5fr 1fr",
    padding: "1.6rem 0rem",
    fontSize: "1rem",
    textTransform: "uppercase",
    fontWeight: "600",
    position: "fixed",
    zIndex: "2"
  },
  routes: {
    width: "100%",
    justifyContent: "space-around",
    display: "flex"
  },
  navItem: {
    color: "fffef9"
  }
};

const Nav = props => {
  return (
    <div style={styles.navbar}>
      <div></div>
      <li>
        <a href="#1"style={styles.brand}>Band Name</a>
      </li>
      <ul style={styles.routes}>
        <li>
          <a href="#1" className="exp-start" style={styles.navItem}>
            Share
          </a>
        </li>
        <li>
          <a href="#1" className="exp-start" style={styles.navItem}>
            About
          </a>
        </li>
        <li>
          <a href="#1" className="exp-start" style={styles.navItem}>
            Listen
          </a>
        </li>
        <li>
          <a href="#1" className="exp-start" style={styles.navItem}>
            Support
          </a>
        </li>
      </ul>
      <div></div>
    </div>
  );
};

export default Nav;
