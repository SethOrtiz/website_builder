import React from "react";
import { withRouter } from "react-router-dom";
import imgTwo from "../placeholders/guitar.jpg";
import imgThree from "../placeholders/bass.jpg";
import imgFour from "../placeholders/singer.jpg";
/* COLOR SCHEME */
/* blue: #d2e7ff  | babyblue: #e3f0ff  | white : #fffef9  | peach: #ffefd7  | lightpeach: #fff6e9 */
const styles = {
  showcase: {
    backgroundColor: "#111"
  },
  wrapper: {
    margin: "0 auto",
    display: "grid",
    gridAutoRows: "80vh",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"
  },
  item: {
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "flex-end"
  },
  itemText: {
    color: "#fffef9",
    fontSize: "2em",
    padding:"0 0 2em 1em"
  }
};

const Showcase = props => {
  return (
    <section style={styles.showcase}>
      <div style={styles.wrapper}>
        <div style={{ ...styles.item, backgroundImage: `url(${imgThree})` }}>
          <h2 style={styles.itemText}>John Doe</h2>
        </div>
        <div style={{ ...styles.item, backgroundImage: `url(${imgFour})` }}>
          <h2 style={styles.itemText}>Jane Doe</h2>
        </div>
        <div style={{ ...styles.item, backgroundImage: `url(${imgTwo})` }}>
          <h2 style={styles.itemText}>Bobby Doe</h2>
        </div>
      </div>
    </section>
  );
};
export default withRouter(Showcase);
