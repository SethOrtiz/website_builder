import React from "react";
import "./css/preview.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Soundcloud from "./components/Soundcloud";
import Showcase from "./components/Showcase";
import { withRouter } from "react-router-dom";

/* COLOR SCHEME */
/* blue: #d2e7ff  | babyblue: #e3f0ff  | white : #fffef9  | peach: #ffefd7  | lightpeach: #fff6e9 | salmon: "#e3c9c9"*/

const styles = {
  preview: {
    height: "100%",
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
  }
};
const Preview = props => {

  return (
    <section id="preview" style={styles.preview}>
      <Nav />
      <Hero />
      <Showcase />
      <Soundcloud />
      <About />
      <Gallery />
      <Footer />
    </section>
  );
};
export default withRouter(Preview);
