import React from "react";
import { Link } from "react-router-dom";
import { WORKSTATION } from "../../../constants/routes";
import { withRouter } from "react-router-dom";

const styles = {
  website: {
    display: "grid",
    alignItems: "center",
    color: "#fffef9"
  },
  handle: {
    margin: "auto",
    color: "#fffef9",
    fontWeight: "600",
    fontSize: "1.7em",
    fontStyle: "italic"
  }
};

const website = props => {
  return (
    <section
      id="P"
      style={{ ...styles.website, backgroundColor: props.backgroundColor }}
    >
      <div style={styles.handle} className="exp-center-fff">
        <Link style={styles.handle} to={WORKSTATION}>
          {props.handle}
        </Link>
      </div>
    </section>
  );
};
export default withRouter(website);
