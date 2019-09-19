import React from "react";
import { withRouter } from "react-router-dom";
import Info from "./Info";

const styles = {
  rightColumn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  getStarted: {
    padding: "0.8rem 2rem",
    fontSize: "4rem",
    backgroundColor: "inherit",
    color: "#fffef9",
    borderRadius: "2rem",
    border: "none",
    outline: "none",
    textAlign: "center",
    fontWeight: "600",
    fontStyle: "italic"
  },
  hero: {
    backgroundColor: "grey",
    height: "100%",
    width: "100%",
 
  },
  container: {
    height: "100vh",
    backgroundColor: "#111"
  }
};

const Hero = props => {
  return (
    <div style={styles.container}>
      <div id="bgImage" style={styles.bgImage}></div>
      <section id="hero-grid" style={styles.hero}>
        <Info
          background="rgba(0,0,0,0.3)"
          fontColor="#fffef9"
          title="New Album Out Now"
          content="Lorem ipsum, Incidunt vel, obcaecati ipsum, corrupti nemo, saepe odio molestias qui. Commodi sit doloribus est eaque!"
        />
        <div style={styles.rightColumn}>
          <button className="exp-center-fff" style={styles.getStarted}>
            Listen
          </button>
        </div>
      </section>
    </div>
  );
};
export default withRouter(Hero);
