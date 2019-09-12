import React from "react";

const styles = {
  brand: {
    fontSize: "1.5rem",
    paddingLeft: "2rem",
    color: "fffef9"
  },
  navbar: {
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
  },
  navItem: {
    marginRight: "1em"
  }
};

const Nav = props => {
  return (
    <div style={styles.navbar}>
      <div></div>
      <a href="#1">Band Name</a>
      <div></div>
      <div style={styles.routes}>
        <div>
          <div className="exp-line-start" style={styles.navItem}>Share</div>
        </div>
        <div>
          <div className="exp-line-start" style={styles.navItem}>About</div>
        </div>
        <div>
          <div className="exp-line-start" style={styles.navItem}>Listen</div>
        </div>
        <div>
          <div className="exp-line-start" style={styles.navItem}>Support</div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Nav;
