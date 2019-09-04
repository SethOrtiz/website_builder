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
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto",
    boxSizing: "border-box",
    borderLeft: "1px solid #000",
    borderTop: "1px solid #000",
    backgroundColor: " #ffefd7"
  },
  box: {
    display: "grid",
    backgroundColor: " #ffefd7"
  },
  create: {
    fontSize: "3em",
    fontStyle: "italic",
    backgroundColor: "inherit",
    textAlign: "center",
    border: "none",
    outline: "none",
    color: "#000",
    fontWeight: "600",
    margin: "auto"
  }
};
const MyWebsites = props => {
  const websites = () => {
    for (let i = 0; i < props.websites.length; i++) {
      const website = props.websites[i];
      return <Website handle={website.name} />;
    }
  };

  return (
    <section id="Dashboard" style={styles.MyWebsites} >
      {websites}
      <div style={styles.box} className="website">
        <Link
          className="exp-center-black"
          style={styles.create}
          to={WORKSTATION}
        >
          New
        </Link>
      </div>
      <Website handle="The Strokes"className="website" />
      <Website handle="The Clash" className="website"/>
      <Website handle="AM" className="website"/>
    </section>
  );
};
export default withRouter(MyWebsites);
