import React from "react";
import { withRouter } from "react-router-dom";
import Info from "../../../landing/components/Info";
/* COLOR SCHEME */
/* blue: #d2e7ff  | babyblue: #e3f0ff  | white : #fffef9  | peach: #ffefd7  | lightpeach: #fff6e9 | */
const styles = {
  rightColumn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  about: {
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
    backgroundImage: "linear-gradient(45deg, #111, #999, #d2e7ff)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    filter: "blur(2px)"
  },
  container: {
    height: "100vh",
    backgroundColor: "#111",
  }
};

const About = props => {
  return (
    <div style={styles.container}>
      <div id="bgImage" style={styles.bgImage}></div>
      <section id="about-grid" style={styles.about}>
        <div style={styles.rightColumn}></div>
        <Info
          background="rgba(0,0,0,0.3)"
          fontColor="#fffef9"
          title="Our Story"
          content="Lorem ipsum dolor sit amet distinctio placeat nihil praesentium ullam architecto minima incidunt cumque natus sapiente"
        />
      </section>
    </div>
  );
};
export default withRouter(About);
