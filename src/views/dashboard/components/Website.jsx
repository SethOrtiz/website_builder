import React, { useState } from "react";
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
    fontSize: "3em",
    fontStyle: "italic"
  },
  buttonContainer: {
    fontSize: "0.3em",
    display: "flex",
    justifyContent: "space-between",
    fontWeight: "500"
  },
  warning: {
    color: "000",
    fontWeight: "600",
    fontSize: "2.5em"
  }
};

const Website = props => {
  const [warning, setWarning] = useState({
    open: false
  });
  const toggleWarning = () => {
    setWarning({ open: !warning.open });
  };
const handleDelete = (Id) => {
  props.deleteWebsite(props.websiteId)
}
  return (
    <>
      <section style={styles.website}>
        {props.editEnabled ? (
          <>
            {warning.open ? (
              <div>
                <div style={styles.warning}>
                  Are you sure?
                  <p>
                    This action cannot be undone.
                  </p>
                  <div style={styles.buttonContainer}>
                    <button className="btn" onClick={handleDelete}>Delete</button>
                    <button className="btn" onClick={toggleWarning}>Cancel</button>
                  </div>
                </div>
              </div>
            ) : (
              <div style={styles.handle} to={WORKSTATION}>
                {props.name}
                <div style={styles.buttonContainer}>
                  <button
                    onClick={toggleWarning}
                    style={styles.delete}
                    className="btn"
                  >
                    Delete
                  </button>
                  <button className="btn">Rename</button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="exp-center-black">
            <Link style={styles.handle} to={WORKSTATION}>
              {props.name}
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default withRouter(Website);
