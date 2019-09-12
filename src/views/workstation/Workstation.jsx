import React from "react";
import NavContainer from "../../redux/landing/nav/NavContainer";
import DisplayContainer from "../../redux/workstation/sections/DisplayContainer";
import ToolboxContainer from "../../redux/workstation/tools/ToolboxContainer";
const styles = {
  workstation: {
    height: "100%",
    backgroundColor: "#fffef9",
    border: "2px solid #000"
  },
  aside: {
    display: "grid",
    backgroundColor: "#fffef9",
    position: "fixed",
    width: "30vw"
  },
  main: {
    borderLeft: "2px solid #000",
    backgroundColor: "mistyrose",
    overflow: "scroll",
    width: "69.85vw",
    position: "absolute",
    right: "0"
  },
  footer: {
    marginTop: "100vh"
  }
};

export default function Workstation() {
  return (
    <>
      <div style={styles.workstation}>
        <aside style={styles.aside}>
          <NavContainer />
          <ToolboxContainer />
        </aside>
        <main style={styles.main}>
          <DisplayContainer />
        </main>
      </div>
    </>
  );
}
