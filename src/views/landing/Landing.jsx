import React from "react";
import Hero from "./components/Hero";
import ShowcaseA from "./components/ShowcaseA";
import ShowcaseB from "./components/ShowcaseB";
import Navbar from "../theme/Navbar";
import Footer from '../theme/Footer'

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseA />
      <ShowcaseB />
      <Footer/>
    </>
  );
}
