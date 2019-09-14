import React from "react";
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
  Display: {
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
  // const renderSoundcloud = () => {
  //   return <Soundcloud />;
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
  //       case "soundcloud":
  //         renderSoundcloud();
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
    <section id="display" style={styles.display}>
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
export default withRouter(Display);
