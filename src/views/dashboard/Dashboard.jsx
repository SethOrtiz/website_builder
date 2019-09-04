import React from "react";
import Profile from "./components/Profile";
import Notepad from "./components/Notepad";
import MyWebsitesContainer from "../../redux/dashboard/websites/MyWebsitesContainer";
import NavContainer from "../../redux/landing/nav/NavContainer";
import Footer from "../theme/Footer";

const styles = {
  dashboard: {
    height: "100vh",
    backgroundColor: "#ddd"
  },
  nav: {
    backgroundColor: "#fffef9"
  },
  aside: {
    display: "grid",
    gridTemplateRows: "1fr 3fr",
    backgroundColor: "#222",
    borderBottom: "1px solid #fff"
  },
  main: {
    backgroundColor: "#ddd"
  }
};

export default function Dashboard() {
  return (
    <>
      <NavContainer />
      <div style={styles.dashboard} className="layout">
        <nav style={styles.nav}></nav>
        <aside style={styles.aside}>
          <Profile />
          <Notepad />
        </aside>
        <main style={styles.main}>
          <MyWebsitesContainer />
        </main>
      </div>
      <Footer />
    </>
  );
}
