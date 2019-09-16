import React from "react";
import { withRouter } from "react-router-dom";
import Info from "../../../landing/components/Info";
/* COLOR SCHEME */
/* blue: #d2e7ff  | babyblue: #e3f0ff  | white : #fffef9  | peach: #ffefd7  | lightpeach: #fff6e9 | salmon: "#e3c9c9"*/
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
    backgroundColor: "rgba(0,0,0,0)",
    height: "100%",
    position: "relative",
    top: "-50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1",
    width: "69.2vw",
    display: "grid",
    gridAutoRows: "100vh",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
  },
  bgImage: {
    height: "100%",
    backgroundImage: "linear-gradient(45deg, #111, #999,  #ffefd7)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    // filter: "blur(2px)"
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
