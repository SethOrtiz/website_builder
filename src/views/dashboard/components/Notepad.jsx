import React from "react";
import { withRouter } from "react-router-dom";

const styles = {
  notepad: {
    borderTop: "1px solid black",
    backgroundColor: "#fffef9" ,
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flexDirection: "column",
    padding: "10%",
    boxSizing: "border-box"
  },
  title: {
      fontSize: "2em",
      marginBottom: "1em"
  },
  note: {
    fontFamily: "Handlee",
    fontSize: "1.2em",
    listStyle: "disc",
    margin: "0.5em 0",
    // boxShadow: "1px 1px 1em #ddd",
    padding: "0.2em",
    borderRadius: "0.5em",
  }
};

const Notepad = props => {
  return (
    <section id="Notepad" style={styles.notepad}>
      <h1 style={styles.title}>Notes</h1>
      <ul>
        <li style={styles.note}>
          Lorem ratpudiandae, deserunt assumenda est. Quidem, cupiditate
          laborum.
        </li>
        <li style={styles.note}>
          Lorem ratpudiandae, deserunt assumenda est. Quidem, cupiditate
          laborum.
        </li>
        <li style={styles.note}>
          Lorem ratpudiandae, deserunt assumenda est. Quidem, cupiditate
          laborum.
        </li>
      </ul>
    </section>
  );
};
export default withRouter(Notepad);
