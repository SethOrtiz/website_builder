import React from "react";
import { Link } from "react-router-dom";
import { WORKSTATION } from "../../../constants/routes";
import { withRouter } from "react-router-dom";

/* COLOR SCHEME */
/* blue: #d2e7ff  | lightblue: #e3f0ff  | white : #fffef9  | peach: #ffefd7  | lightpeach: #fff6e9 */

const styles = {
  website: {
    display: "grid",
    alignItems: "center",
    color: "#000",
    backgroundColor: "#d2e7ff"
  },
  handle: {
    margin: "auto",
    color: "#000",
    fontWeight: "600",
    fontSize: "1.7em",
    fontStyle: "italic"
  }
};

const website = props => {
  return (
    <section id="P" style={styles.website}>
      <div style={styles.handle} className="exp-center-black">
        <Link style={styles.handle} to={WORKSTATION}>
          {props.handle}
        </Link>
      </div>
    </section>
  );
};
export default withRouter(website);
