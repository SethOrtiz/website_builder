import React from "react";
import Website from "./Website";
import { Link } from "react-router-dom";
import { WORKSTATION } from "../../../constants/routes";
import { withRouter } from "react-router-dom";

/* COLOR SCHEME */
/* blue: #d2e7ff  | babyblue: #e3f0ff  | white : #fffef9  | peach: #ffefd7  | lightpeach: #fff6e9 | salmon: "#e3c9c9"*/

const styles = {
  MyWebsites: {
    height: "100%",
    backgroundColor: "#000",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto",
    boxSizing: "border-box",
    borderTop: "1px solid #333",
    borderLeft: "1px solid #333"
  },
  box: {
    margin: "auto"
  },
  create: {
    fontSize: "3em",
    fontStyle: "italic",
    backgroundColor: "#000",
    textAlign: "center",
    border: "none",
    outline: "none",
    color: "#fffef9",
    fontWeight: "600"
  }
};

const MyWebsites = props => {
  const assignColor = index => {
    if (index % 2 === 0) {
      return "#fffef9";
    } else {
      return "#d2e7ff";
    }
  };

  /// reders a website component for every user website and assings it a new background
  // to do: assing picture instead of color and add a blurr effect to it
  const websites = () => {
    for (let i = 0; i < props.websites.length; i++) {
      const website = props.websites[i];
      return <Website handle={website.name} backgroundColor={assignColor(i)} />;
    }
  };

  return (
    <section id="Dashboard" style={styles.MyWebsites}>
      {websites}
      <div style={styles.box}>
        <Link className="exp-center-fff" style={styles.create} to={WORKSTATION}>
          New
        </Link>
      </div>
      <Website handle="The Strokes" backgroundColor="#e3c9c9" />
      <Website handle="The Clash" backgroundColor="#e3c9c9" />
      <Website handle="AM" backgroundColor="#000" />
    </section>
  );
};
export default withRouter(MyWebsites);
