import React from "react";
import Profile from "./components/Profile";
import NotepadContainer from "../../redux/dashboard/notes/NotepadContainer";
import MyWebsitesContainer from "../../redux/dashboard/websites/MyWebsitesContainer";
import NavContainer from "../../redux/landing/nav/NavContainer";
import Footer from "../theme/Footer";

const styles = {
  dashboard: {
    backgroundColor: "#111"
  },
  nav: {
    backgroundColor: "#fffef9"
  },
  aside: {
    display: "grid",
    gridTemplateRows: "1fr 3fr",
    backgroundColor: "#222"
  },
  main: {
    backgroundColor: "#111"
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
          <NotepadContainer />
        </aside>
        <main style={styles.main}>
          <MyWebsitesContainer />
        </main>
      </div>
      <Footer />
    </>
  );
}
