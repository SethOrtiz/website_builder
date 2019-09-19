import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Soundcloud from "./components/Soundcloud";
import Showcase from "./components/Showcase";
import { withRouter } from "react-router-dom";

const Preview = props => {

  return (
    <section id="preview" className="preview">
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
