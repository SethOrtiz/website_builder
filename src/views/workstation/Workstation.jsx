import React from "react";
import NavContainer from "../../redux/landing/nav/NavContainer";
import DisplayContainer from "../../redux/workstation/sections/DisplayContainer";
import ToolboxContainer from "../../redux/workstation/tools/ToolboxContainer";
import Footer from "../theme/Footer";
const styles = {
  workstation: {
    height: "100vh",
    backgroundColor: "#111",
    border: "2px solid #000"
  },
  nav: {
    backgroundColor: "#fffef9",
    borderLeft: "2px solid #000"
  },
  aside: {
    backgroundColor: "#fffef9",
  },
  main: {
    borderTop: "2px solid #000",
    borderLeft: "2px solid #000",
    backgroundColor: "lightyellow"
  }
};

export default function Workstation() {
  return (
    <>
      <NavContainer />
      <div style={styles.workstation} className="layout">
        <nav style={styles.nav}></nav>
        <aside style={styles.aside}>
          <ToolboxContainer />
        </aside>
        <main style={styles.main}>
        <DisplayContainer />
        </main>
      </div>
      <Footer />
    </>
  );
}
