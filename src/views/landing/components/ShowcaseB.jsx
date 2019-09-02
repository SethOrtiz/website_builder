import React from "react";
import Info from "./Info";

const showcaseBStyles = {
  backgroundColor: "#cbdadb",
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "1fr 5fr 5fr 1fr",
  gridTemplateRows: "1fr 10fr 1fr"
};


const rightColumnStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#eedbdb"
};

export default function ShowcaseB() {
  return (
    <section id="B" style={showcaseBStyles}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <Info
        background="#cecbcb"
        fontColor="#fff"
        title="Be Heard."
        content="Design and build your own high-quality websites. Whether you’re
          promoting a band, showcasing your work, selling merch or
          sharing your music with your fans, Hubstereo is here to help."
        linkOne={["Get Started", "#H", "#fff"]}
        linkTwo={["Solo Artists", "#A", "#fff"]}
      />
      <div style={rightColumnStyles}></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
  );
}
