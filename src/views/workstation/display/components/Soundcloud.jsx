import React from "react";
import { withRouter } from "react-router-dom";
import MusicPlayer from "./MusicPlayer.jsx";

const styles = {
  rightColumn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  soundcloud: {
    backgroundColor: "rgba(0,0,0,0)",
    height: "100vh",
    position: "relative",
    top: "-50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1",
    width: "69.2vw",
    display: "grid",
    gridTemplateColumns: "1fr 10fr 1fr",
    gridTemplateRows: "1fr 10fr 1fr"
  },
  bgImage: {
    height: "100%",
    backgroundImage: "linear-gradient(45deg, #111, #999, #fff6e9)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    filter: "blur(1px)"
  },
  container: {
    height: "100vh",
    backgroundColor: "#111"
  }
};

const Soundcloud = props => {
  return (
    <div style={styles.container}>
      <div id="bgImage" style={styles.bgImage}></div>
      <section id="about-grid" style={styles.soundcloud}>
        <div className="navRow"></div>
        <div></div>
        <MusicPlayer/>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>
    </div>
  );
};
export default withRouter(Soundcloud);
