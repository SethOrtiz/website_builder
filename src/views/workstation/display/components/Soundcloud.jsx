import React from "react";
import { withRouter } from "react-router-dom";
/* COLOR SCHEME */
/* blue: #d2e7ff  | babyblue: #e3f0ff  | white : #fffef9  | peach: #ffefd7  | lightpeach: #fff6e9 | salmon: "#e3c9c9"*/
const styles = {
  soundcloud: {
    height: "50vh",
    display: "grid",
    backgroundColor: "#e3f0ff",
    fontSize: "3rem",
    padding: "2em",
    textAlign: "center"
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
