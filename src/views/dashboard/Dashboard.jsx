import React from "react";
import ProfileContainer from "../../redux/dashboard/profile/ProfileContainer";
import NotepadContainer from "../../redux/dashboard/notes/NotepadContainer";
import MyWebsitesContainer from "../../redux/dashboard/websites/MyWebsitesContainer";
import NavContainer from "../../redux/landing/nav/NavContainer";
import Footer from "../Footer";


export default function Dashboard() {
  return (
    <>
      <div  className="layout">
        <NavContainer  />
        <aside >
          <ProfileContainer />
          <NotepadContainer />
        </aside>
        <main >
          <MyWebsitesContainer />
        </main>
      </div>
      <Footer />
    </>
  );
}
