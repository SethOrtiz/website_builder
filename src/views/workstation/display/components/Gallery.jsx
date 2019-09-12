import React from "react";
import { withRouter } from "react-router-dom";
/* COLOR SCHEME */
/* blue: #d2e7ff  | babyblue: #e3f0ff  | white : #fffef9  | peach: #ffefd7  | lightpeach: #fff6e9 */
const styles = {
  gallery: {
    height: "50vh",
    display: "grid",
    backgroundColor: "#fff6e9",
    fontSize: "3rem",
    padding: "2em",
    textAlign: "center"
  }
};

const Gallery = props => {
  return (
    <section style={styles.gallery}>
      <h1> Gallery </h1>
    </section>
  );
};
export default withRouter(Gallery);
