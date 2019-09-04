import React, { useState, useEffect } from "react";
import Nav from "./nav/Nav";
import About from "./about/About";
import Footer from "./footer/Footer";
import Gallery from "./gallery/Gallery";
import Hero from "./hero/Hero";
import Soundcloud from "./soundcloud/Soundcloud";
import { withRouter } from "react-router-dom";

/* COLOR SCHEME */
/* blue: #d2e7ff  | babyblue: #e3f0ff  | white : #fffef9  | peach: #ffefd7  | lightpeach: #fff6e9 | salmon: "#e3c9c9"*/

const styles = {
  Display: {
    height: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto",
    boxSizing: "border-box",
    borderLeft: "1px solid #000",
    borderTop: "1px solid #000",
    backgroundColor: " #ffefd7"
  },
  box: {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    backgroundColor: " #ffefd7",
    alignItems: "flex-end",
    boxSizing: "border-box"
  },
  create: {
    fontSize: "3em",
    fontStyle: "italic",
    backgroundColor: "inherit",
    border: "none",
    outline: "none",
    color: "#000",
    fontWeight: "600",
    margin: "0 auto auto auto"
  },
  input: {
    fontSize: "3em",
    borderBottom: "none"
  },
  feedback: {
    width: "100%",
    height: "3em",
    backgroundColor: "darkred"
  }
};
const Display = props => {
  const [section, setSection] = useState({
    value: ""
  });
  const [empty, setEmpty] = useState({
    value: false
  });
  ///////////////////////////////////////////     RESET WHEN COMPONENT MOUNTS
  useEffect(() => {
    setEmpty({ value: false });
  }, []);
  ///////////////////////////////////////////     UPDATE VALUE ON CHANGE
  const handleChange = e => {
    e.preventDefault();
    const { value } = e.target;
    setSection({ value });
    setEmpty({
      value: false
    });
  };

  ///////////////////////////////////////////     RESETS AFTER SUCCESSFUL SUBMITION
  const resetState = () => {
    setSection({
      value: ""
    });
  };
  ///////////////////////////////////////////       CREATES A SECTION
  const handleSubmit = e => {
    e.preventDefault();
    if (section.value) {
      props.addSection(section.value);
      resetState();
    } else {
      setEmpty({
        value: true
      });
    }
  };

   ///////////////////////////////////////////       CREATE
  const renderNav = () => {
    return <Nav />;
  };
  const renderHero = () => {
    return <Hero />;
  };
  const renderGallery = () => {
    return <Gallery />;
  };
  const renderAbout = () => {
    return <About />;
  };
  const renderSoundcloud = () => {
    return <Soundcloud />;
  };
  const renderFooter = () => {
    return <Footer />;
  };
  const websites = () => {
    for (let i = 0; i < props.secitons.length; i++) {
      const section = props.sections[i];
      switch (section.type) {
        case "nav":
          renderNav();
          break;
        case "hero":
          renderHero();
          break;
        case "gallery":
          renderGallery();
          break;
        case "about":
          renderAbout();
          break;
        case "soundcloud":
          renderSoundcloud();
          break;
        case "footer":
          renderFooter();
          break;
        default:
          break;
      }
    }
  };

  return (
    <section id="Dashboard" style={styles.Display}>
      {websites}
      <form style={styles.box} onSubmit={handleSubmit} noValidate>
        <div>
          <input
            type="text"
            name="new-section"
            style={styles.input}
            onChange={handleChange}
            placeholder="Name"
            value={section.value}
            className="control-center"
            noValidate
            autoComplete="off"
          />
          {empty.value && <div style={styles.feedback}> </div>}
        </div>
        <button
          type="submit"
          style={styles.create}
          className="exp-center-black"
        >
          Create
        </button>
      </form>
      <Nav />
      <Hero />
      <Gallery />
      <Soundcloud />
      <About />
      <Footer />
    </section>
  );
};
export default withRouter(Display);
