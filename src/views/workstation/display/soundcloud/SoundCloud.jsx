import React from "react";
import { withRouter } from "react-router-dom";
/* COLOR SCHEME */
/* blue: #d2e7ff  | babyblue: #e3f0ff  | white : #fffef9  | peach: #ffefd7  | lightpeach: #fff6e9 | salmon: "#e3c9c9"*/
const styles = {
  hero: {
    backgroundColor: "#fffef9",
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr 5fr 5fr 1fr",
    gridTemplateRows: "1fr 10fr 1fr"
  },
  rightColumn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffefd7"
  },
  info: {
    display: "grid",
    gridTemplateColumns: "1fr 10fr 1fr",
    gridTemplateRows: "1fr 3fr 3fr 3fr  1fr"
  },
  title: {
    display: "flex",
    fontSize: "3rem",
    alignItems: "flex-end"
  },
  content: {
    display: "flex",
    alignItems: "center",
    fontSize: "1.6rem"
  },
  links: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    fontSize: "1.6rem",
    fontWeight: "500"
  },
  link: {
    paddingTop: "1rem"
  }
};

const Display = props => {
  return (
    <section
      style={{
        ...styles.info,
        backgroundColor: props.background,
        color: props.fontColor
      }}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div style={styles.title}>
        <h1>{props.title}</h1>
      </div>
      <div></div>
      <div></div>
      <div style={styles.content}>
        <p>{props.content}</p>
      </div>
      <div></div>
      <div></div>
      {/* linkOne ,linkTwo, and linkThree are arrays in the props objects [href, content, color] */}
      <div style={styles.links}>
        {props.linkOne && (
          <div style={styles.link} className="exp-center-black">
            <a style={{ color: props.linkOne[2] }} href={props.linkOne[1]}>
              {props.linkOne[0]}
            </a>
          </div>
        )}
        {props.linkTwo && (
          <div style={styles.link} className="exp-center-black">
            <a style={{ color: props.linkTwo[2] }} href={props.linkTwo[1]}>
              {props.linkTwo[0]}
            </a>
          </div>
        )}
        {props.linkThree && (
          <div style={styles.link} className="exp-center-black">
            <a href={props.linkThree[1]}>{props.linkThree[0]}</a>
          </div>
        )}
      </div>
      <div></div>
      <div className="row"></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
  );
};
export default withRouter(Display);
