import React from "react";
import { withRouter } from "react-router-dom";

const styles = {
  soundcloud: {
    height: "50vh",
    display: "grid",
    backgroundColor: "#111",
    fontSize: "3rem",
    padding: "2em",
    textAlign: "center",
    color: "#fffef9"
  }
};

const Soundcloud = props => {
  return (
    <section style={styles.soundcloud}>
        <h1> Soundcloud </h1>
    </section>
  );
};
export default withRouter(Soundcloud);
