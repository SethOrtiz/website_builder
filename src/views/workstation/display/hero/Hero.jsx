import React from "react";
import { withRouter } from "react-router-dom";
/* COLOR SCHEME */
/* blue: #d2e7ff  | babyblue: #e3f0ff  | white : #fffef9  | peach: #ffefd7  | lightpeach: #fff6e9 | salmon: "#e3c9c9"*/
const styles = {
  hero: {
    display: "grid",
    backgroundColor: "#ffefd7",
    fontSize: "3rem",
    padding: "2em",
    textAlign: "center"
  }
};

const Hero = props => {
  return (
    <section style={styles.hero}>
        <h1> Hero </h1>
    </section>
  );
};
export default withRouter(Hero);
