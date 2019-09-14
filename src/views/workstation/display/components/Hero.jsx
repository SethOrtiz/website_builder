import React from "react";
import { withRouter } from "react-router-dom";
import Info from "../../../landing/components/Info";
import Background from "../placeholders/band.jpg";
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
    height: "100vh",
    position: "relative",
    top: "-50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1",
    width: "69.2vw",
    display: "grid",
    gridTemplateColumns: "1fr 5fr 5fr 1fr",
    gridTemplateRows: "1fr 10fr 1fr"
  },
  bgImage: {
    height: "100%",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    filter: "blur(2px)",
  },
  container: {
    height: "100vh",
    backgroundColor: "#111"
  }
};

const Hero = props => {
  return (
    <div style={styles.container} >
      <div id="bgImage"style={styles.bgImage}></div>
      <section id="hero-grid" style={styles.hero}>
        <div className="navRow"></div>
        <div></div>
        <Info
          background="rgba(0,0,0,0.8)"
          fontColor="#fffef9"
          title="New Album Out Now"
          content="12 new songs adopting a fresh new style. "
        />
        <div style={styles.rightColumn}>
          <button className="exp-center-fff" style={styles.getStarted}>
            Tour Dates
          </button>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>
    </div>
  );
};
export default withRouter(Hero);
