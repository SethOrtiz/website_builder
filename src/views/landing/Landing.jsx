import React from "react";
import HeroContainer from "../../redux/landing/nav/HeroContainer";
import NavContainer from "../../redux/landing/nav/NavContainer";
import Info from "./components/Info";
import Footer from "../Footer";
export default function Landing() {
  return (
    <>
      <NavContainer />
      <HeroContainer />
      <section id="A" className="about">
        <div className="left-column"></div>
        <Info
          background="#111"
          fontColor="#fffef9"
          title="Express Yourself."
          content="Design and build your own high-quality websites. Whether you’re
          promoting a band, showcasing your work, selling merch or
          sharing your music with your fans, Hubstereo is here to help."
          linkOne={["Get Started", "#Hero", "#fffef9"]}
          linkTwo={["Bands", "#B", "#fffef9"]}
        />
      </section>
      <section id="B" className="about">
        <Info
          background="#111"
          fontColor="#fffef9"
          title="Express Yourself."
          content="Design and build your own high-quality websites. Whether you’re
          promoting a band, showcasing your work, selling merch or
          sharing your music with your fans, Hubstereo is here to help."
          linkOne={["Get Started", "#Hero", "#fffef9"]}
          linkTwo={["Bands", "#A", "#fffef9"]}
        />
        <div className="right-column"></div>
      </section>
      <Footer />
    </>
  );
}
