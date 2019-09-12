import React from "react";
import ProfileContainer from "../../redux/dashboard/profile/ProfileContainer";
import NotepadContainer from "../../redux/dashboard/notes/NotepadContainer";
import MyWebsitesContainer from "../../redux/dashboard/websites/MyWebsitesContainer";
import NavContainer from "../../redux/landing/nav/NavContainer";
import Footer from "../theme/Footer";
/* COLOR SCHEME */
/* blue: #d2e7ff  | babyblue: #e3f0ff  | white : #fffef9  | peach: #ffefd7  | lightpeach: #fff6e9 | salmon: "#e3c9c9"*/
const styles = {
  dashboard: {
    backgroundColor: "#222",
  },
  nav: {
    backgroundColor: "#fffef9",
    borderTop: "2px solid #000"
  },
  aside: {
    display: "grid",
    backgroundColor: "#222"
  },
  main: {
    backgroundColor: "#222"
  },
  footer: {
  }
};

export default function Dashboard() {
  return (
    <>
      <NavContainer />
      <div style={styles.dashboard} className="layout">
        <aside style={styles.aside}>
          <ProfileContainer />
          <NotepadContainer />
        </aside>
        <main style={styles.main}>
          <MyWebsitesContainer />
        </main>
      </div>
      <Footer style={styles.footer}/>
    </>
  );
}
