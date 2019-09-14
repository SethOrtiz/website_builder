import React from "react";
import NavContainer from "../../redux/landing/nav/NavContainer";
import DisplayContainer from "../../redux/workstation/sections/DisplayContainer";
import ToolboxContainer from "../../redux/workstation/tools/ToolboxContainer";
const styles = {
  workstation: {  
    backgroundColor: "#fffef9",
    border: "2px solid #000",
    borderTop: "none"
  },
  aside: {
    display: "grid",
    backgroundColor: "#fffef9",
    position: "fixed",
    width: "30vw",
    marginTop: "-8vh"
  },
  main: {
    borderTop: "2px solid #000",
    borderRight: "2px solid #000",
    backgroundColor: "mistyrose",
    width: "69.7vw",
    position: "absolute",
    right: "2px",
    boxSizing: "border-box"
  },
  footer: {
    marginTop: "100vh"
  }
};

export default function Workstation() {
  return (
    <>
      <div style={styles.workstation}>
      <NavContainer />
        <aside style={styles.aside}>
          <ToolboxContainer />
        </aside>
        <main style={styles.main}>
          <DisplayContainer />
        </main>
      </div>
    </>
  );
}
