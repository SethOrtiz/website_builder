import React from "react";
import Info from "./Info";

const showcaseAStyles = {
  backgroundColor: "#e3f0ff",
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "1fr 5fr 5fr 1fr",
  gridTemplateRows: "1fr 10fr 1fr"
};

const leftColumnStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fffef9"
};

export default function ShowcaseA() {
  return (
    <section id="A" style={showcaseAStyles}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div style={leftColumnStyles}></div>
      <Info
        background="#000"
        fontColor="#fffef9"
        title="Express Yourself."
        content="Design and build your own high-quality websites. Whether you’re
          promoting a band, showcasing your work, selling merch or
          sharing your music with your fans, Hubstereo is here to help."
        linkOne={["Get Started", "#H","#fffef9"]}
        linkTwo={["Bands", "#B", "#fffef9"]}
      />
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
  );
}
