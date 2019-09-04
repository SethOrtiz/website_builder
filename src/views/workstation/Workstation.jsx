import React from "react";
import NavContainer from "../../redux/landing/nav/NavContainer";
import Footer from "../theme/Footer";

const styles = {
  workstation: {
    height: "100vh",
    backgroundColor: "#fff"
  },
  nav: {
    backgroundColor: "#fff"
  },
  aside: {
    display: "grid",
    gridTemplateRows: "1fr 6fr",
    backgroundColor: "#ddd",
    borderTop: "1px solid #333"
  },
  main: {
    backgroundColor: "#fff",
    boxSizing: "border-box",
    borderTop: "1px solid #333",
    borderLeft: "1px solid #333"
  }
};

export default function Workstation() {
  return (
    <>
      <NavContainer />
      <div style={styles.workstation} className="layout">
        <nav style={styles.nav}></nav>
        <aside style={styles.aside}></aside>
        <main style={styles.main}></main>
      </div>
      <Footer />
    </>
  );
}
