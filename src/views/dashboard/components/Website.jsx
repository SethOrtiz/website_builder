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
    justifyContent: "center",
    color: "#000",
    backgroundImage: "linear-gradient(45deg, #222, #ffefd7, #d2e7ff, #222)",
    outline: "2px solid #000"
  },
  handle: {
    color: "000",
    fontWeight: "600",
    fontSize: "1.7em",
    fontStyle: "italic"
  }
};

const website = props => {
  return (
    <section style={styles.website}>
      <div style={styles.handle} className="exp-center-black">
        <Link style={styles.handle} to={WORKSTATION}>
          {props.name}
        </Link>
      </div>
    </section>
  );
};
export default withRouter(website);
