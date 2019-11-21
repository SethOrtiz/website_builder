import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import Showcase from "./components/Showcase";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { WORKSTATION } from "../../constants/routes";

const Preview = props => {
  return (
    <section id="preview" className="preview">
      <Link to={WORKSTATION} className="exit-preview">
        Exit Preview
      </Link>
      <Nav />
      <Hero bgImage="https://bit.ly/2rRX3sV" />
      <MusicPlayer coverImage="https://bit.ly/32Vh0fe" />
      <Showcase
        imageOne="https://bit.ly/2KzwCim"
        imageTwo="https://bit.ly/2KzwCim"
        imageThree="https://bit.ly/2KzwCim"
        imageFour="https://bit.ly/2KzwCim"
        captionOne="Caption"
        captionTwo="Caption"
        captionThree="Caption"
        captionFour="Caption"
      />
      <About />
      <Gallery />
      <Footer />
    </section>
  );
};
export default withRouter(Preview);
