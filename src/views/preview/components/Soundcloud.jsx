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
    backgroundColor: "rgba(0,0,0,0.4)",
    height: "100%",
    position: "relative",
    top: "-50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1",
    display: "grid"
  },
  bgImage: {
    height: "100%",
    backgroundImage: "linear-gradient(45deg, #111, #999, #fff6e9)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
    // filter: "blur(1px)"
  },
  container: {
    height: "100vh",
    backgroundColor: "#111"
  }
};

const Soundcloud = props => {
  return (
    <div id="music-container" style={styles.container}>
      <div id="bgImage" style={styles.bgImage}></div>
      <section id="about-grid" style={styles.soundcloud}>
        <MusicPlayer />
      </section>
    </div>
  );
};
export default withRouter(Soundcloud);
