import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import Showcase from "./components/Showcase";
import { withRouter } from "react-router-dom";

const Display = props => {
  //   const [newSection, setNewSection] = useState({
  //     value: ""
  //   });
  //   const [empty, setEmpty] = useState({
  //     value: false
  //   });
  ///////////////////////////////////////////     RESET WHEN COMPONENT MOUNTS
  // useEffect(() => {
  //   setEmpty({ value: false });
  // }, []);
  ///////////////////////////////////////////     UPDATE VALUE ON CHANGE
  // const handleChange = e => {
  //   e.preventDefault();
  //   const { value } = e.target;
  //   setNewSection({ value });
  //   setEmpty({
  //     value: false
  //   });
  // };

  ///////////////////////////////////////////     RESETS AFTER SUCCESSFUL SUBMITION
  // const resetState = () => {
  //   setNewSection({
  //     value: ""
  //   });
  // };
  ///////////////////////////////////////////       CREATES A SECTION
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (section.value) {
  //     props.addSection(section.value);
  //     resetState();
  //   } else {
  //     setEmpty({
  //       value: true
  //     });
  //   }
  // };

  ///////////////////////////////////////////       CREATE
  // const renderNav = () => {
  //   return <Nav />;
  // };
  // const renderHero = () => {
  //   return <Hero />;
  // };
  // const renderGallery = () => {
  //   return <Gallery />;
  // };
  // const renderAbout = () => {
  //   return <About />;
  // };
  // const renderMusicPlayer = () => {
  //   return <MusicPlayer />;
  // };
  // const renderFooter = () => {
  //   return <Footer />;
  // };
  // const websites = () => {
  //   for (let i = 0; i < props.sections.length; i++) {
  //     const section = props.sections[i];
  //     switch (section.type) {
  //       case "nav":
  //         renderNav();
  //         break;
  //       case "hero":
  //         renderHero();
  //         break;
  //       case "gallery":
  //         renderGallery();
  //         break;
  //       case "about":
  //         renderAbout();
  //         break;
  //       case "MusicPlayer":
  //         renderMusicPlayer();
  //         break;
  //       case "footer":
  //         renderFooter();
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  // };

  return (
    <section id="display">
      <Nav />
      <Hero bgImage="https://bit.ly/2rRX3sV" />
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
      <MusicPlayer coverImage="https://bit.ly/32Vh0fe" />
      <About />
      <Gallery />
      <Footer />
    </section>
  );
};
export default withRouter(Display);
