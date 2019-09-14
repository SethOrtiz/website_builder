import React from "react";
import { withRouter } from "react-router-dom";
/* COLOR SCHEME */
/* blue: #d2e7ff  | babyblue: #e3f0ff  | white : #fffef9  | peach: #ffefd7  | lightpeach: #fff6e9 */
const styles = {
  gallery: {
    backgroundColor: "#fffef9"
  },
  wrapper: {
    padding: "10px",
    margin: "0 auto",
    display: "grid",
    gridAutoRows: "40vh",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gridGap: "10px"
  }
};

const Gallery = props => {
  return (
    <section style={styles.gallery}>
      <div style={styles.wrapper}>
        <div style={styles.item} className="crowd">
          <img src="" alt="" />
        </div>
        <div style={styles.item} className="crowd">
          <img src="" alt="" />
        </div>
        <div style={styles.item} className="crowd">
          <img src="" alt="" />
        </div>
        <div style={styles.item} className="crowd">
          <img src="" alt="" />
        </div>
        <div style={styles.item} className="crowd">
          <img src="" alt="" />
        </div>
        <div style={styles.item} className="crowd">
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
};
export default withRouter(Gallery);
