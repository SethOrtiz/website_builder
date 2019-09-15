import React from "react";
import { withRouter } from "react-router-dom";
/* COLOR SCHEME */
/* blue: #d2e7ff  | babyblue: #e3f0ff  | white : #fffef9  | peach: #ffefd7  | lightpeach: #fff6e9 */
const styles = {
  gallery: {
    backgroundImage: "linear-gradient(45deg, #111, #999, #ffefd7)"
  },
  wrapper: {
    padding: "10px",
    margin: "0 auto",
    display: "grid",
    gridAutoRows: "40vh",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gridGap: "10px"
  },
  item: {
    backgroundImage: "linear-gradient(45deg, #111, #999, #fffef9)"
  }
};

const Gallery = props => {
  return (
    <section style={styles.gallery}>
      <div style={styles.wrapper}>
        <div style={styles.item}>
          <img src="" alt="" />
        </div>
        <div style={styles.item}>
          <img src="" alt="" />
        </div>
        <div style={styles.item}>
          <img src="" alt="" />
        </div>
        <div style={styles.item}>
          <img src="" alt="" />
        </div>
        <div style={styles.item}>
          <img src="" alt="" />
        </div>
        <div style={styles.item}>
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
};
export default withRouter(Gallery);
