import React from "react";
import HeroContainer from "../../redux/landing/nav/HeroContainer";
import ShowcaseA from "./components/ShowcaseA";
import ShowcaseB from "./components/ShowcaseB";
import NavContainer from "../../redux/landing/nav/NavContainer";
import Footer from "../theme/Footer";
export default function Landing() {
  return (
    <>
      <NavContainer />
      <HeroContainer />
      <ShowcaseA />
      <ShowcaseB />
      <Footer />
    </>
  );
}
